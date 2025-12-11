import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UsersManagement = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [searchText, setSearchText] = useState("");

  // Fetch users
  const { data: users = [] } = useQuery({
    queryKey: ["users", searchText],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?searchText=${searchText}`);
      return res.data;
    },
  });

  // Optimistic update helper
  const updateRoleOptimistically = (userId, newRole) => {
    queryClient.setQueryData(["users", searchText], (oldUsers = []) =>
      oldUsers.map((user) =>
        user._id === userId ? { ...user, role: newRole } : user
      )
    );
  };

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: `Are you sure you want to make ${
        user.name || user.displayName
      } an Admin?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, make Admin",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        updateRoleOptimistically(user._id, "admin");

        axiosSecure
          .patch(`/users/${user._id}/role`, { role: "admin" })
          .then((res) => {
            if (res.data.modifiedCount) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name || user.displayName} is now an Admin`,
                showConfirmButton: false,
                timer: 2000,
              });
            } else {
              queryClient.invalidateQueries(["users", searchText]);
            }
          })
          .catch(() => {
            queryClient.invalidateQueries(["users", searchText]);
          });
      }
    });
  };

  const handleRemoveAdmin = (user) => {
    Swal.fire({
      title: `Are you sure you want to remove admin from ${
        user.name || user.displayName
      }?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove Admin",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        updateRoleOptimistically(user._id, "user");

        axiosSecure
          .patch(`/users/${user._id}/role`, { role: "user" })
          .then((res) => {
            if (res.data.modifiedCount) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name || user.displayName} is no longer an Admin`,
                showConfirmButton: false,
                timer: 2000,
              });
            } else {
              queryClient.invalidateQueries(["users", searchText]);
            }
          })
          .catch(() => {
            queryClient.invalidateQueries(["users", searchText]);
          });
      }
    });
  };

  const handleMakeLibrarian = (user) => {
    Swal.fire({
      title: `Are you sure you want to make ${
        user.name || user.displayName
      } a Librarian?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, make Librarian",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        updateRoleOptimistically(user._id, "librarian");

        axiosSecure
          .patch(`/users/${user._id}/librarian`)
          .then((res) => {
            if (res.data.modifiedCount) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name || user.displayName} is now a Librarian`,
                showConfirmButton: false,
                timer: 2000,
              });
            } else {
              queryClient.invalidateQueries(["users", searchText]);
            }
          })
          .catch(() => {
            queryClient.invalidateQueries(["users", searchText]);
          });
      }
    });
  };

  const handleRemoveLibrarian = (user) => {
    Swal.fire({
      title: `Are you sure you want to remove librarian from ${
        user.name || user.displayName
      }?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove Librarian",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        updateRoleOptimistically(user._id, "user");

        axiosSecure
          .patch(`/users/${user._id}/librarian/remove`)
          .then((res) => {
            if (res.data.modifiedCount) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${
                  user.name || user.displayName
                } is no longer a Librarian`,
                showConfirmButton: false,
                timer: 2000,
              });
            } else {
              queryClient.invalidateQueries(["users", searchText]);
            }
          })
          .catch(() => {
            queryClient.invalidateQueries(["users", searchText]);
          });
      }
    });
  };

  return (
    <div className="p-4 sm:p-6 md:p-10 bg-gray-50 min-h-screen dark:bg-gray-500 dark:text-gray-200">
      {/* Headline */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center md:text-left">
        All Users <span className="text-blue-500">({users.length})</span>
      </h2>
      <p>
        Sanaya Sabrin is the highest-level and permanent admin, so her role
        cannot be changed to Librarian. For other users, you may assign either
        the Librarian or Admin role. Please note that if an Admin is reassigned
        as a Librarian, they will lose their Admin privileges, and if a
        Librarian is reassigned as an Admin, they will lose their Librarian
        role.
      </p>

      {/* Search */}
      <div className="mb-6 max-w-lg mx-auto md:mx-0">
        <input
          type="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Users..."
          className="dark:bg-gray-700 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm transition"
        />
      </div>

      {/* Users List */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {users.map((user) => (
          <div
            key={user._id}
            className="bg-white rounded-xl shadow-md p-5 flex flex-col gap-3 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-600 dark:text-gray-100"
          >
            {/* User Info */}
            <div className="flex items-center gap-4">
              <img
                src={user.photoURL || "https://i.ibb.co/2FsfXqM/user.png"}
                alt="avatar"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-gray-200"
              />
              <div className="flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-100">
                  {user.name || user.displayName}
                </h3>
                <p className="text-sm sm:text-base text-gray-500 break-words dark:text-gray-100">
                  {user.email}
                </p>
              </div>
            </div>

            {/* Current Role */}
            <div className="text-sm sm:text-base text-gray-600 font-medium">
              Current Role:{" "}
              <span className="text-gray-800 dark:text-gray-100">
                {user.role}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2 mt-2">
              {/* Admin Buttons */}
              {user.role === "admin" ? (
                user.email === "sanaya@gmail.com" ? (
                  <button className="px-3 py-1 rounded-full bg-green-200 text-green-800 font-semibold cursor-not-allowed">
                    Assigned as Admin
                  </button>
                ) : (
                  <button
                    onClick={() => handleRemoveAdmin(user)}
                    className="px-3 py-1 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 transition"
                  >
                    Revoke Admin
                  </button>
                )
              ) : (
                <button
                  onClick={() => handleMakeAdmin(user)}
                  className="px-3 py-1 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition"
                >
                  Make Admin
                </button>
              )}

              {/* Librarian Buttons */}
              {user.role === "librarian" ? (
                <button
                  onClick={() => handleRemoveLibrarian(user)}
                  className="px-3 py-1 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 transition"
                >
                  Revoke Librarian
                </button>
              ) : (
                <button
                  onClick={() => handleMakeLibrarian(user)}
                  className="px-3 py-1 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
                  disabled={user.email === "sanaya@gmail.com"} // Disabled for Sanaya
                >
                  Make Librarian
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {users.length === 0 && (
        <p className="text-gray-500 mt-10 text-center text-lg">
          No users found.
        </p>
      )}
    </div>
  );
};

export default UsersManagement;
