import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUserShield } from "react-icons/fa";
import { FiShieldOff } from "react-icons/fi";
import Swal from "sweetalert2";

const UsersManagement = () => {
  //TODO: Must ask before proceed
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });

  const handleMakeUser = (user) => {
    const roleInfo = { role: "admin" };
    //TODO: Must ask before proceed
    axiosSecure.patch(`/users/${user._id}`, roleInfo).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.displayName || user.name} Marked as Admin`,
          showCancelButton: false,
          timer: 2500,
        });
      }
    });
  };

  const handleRemoveAdmin = (user) => {
    const roleInfo = { role: "user" };
    axiosSecure.patch(`/users/${user._id}`, roleInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.displayName || user.name} Removed From Admin`,
          showCancelButton: false,
          timer: 2500,
        });
      }
    });
  };
  return (
    <div>
      <h2 className="text-4xl">Manage Users:{users.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin Actions</th>
              <th>Other Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user.photoURL} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        {user.name || user.displayName}
                      </div>
                      <div className="text-sm opacity-50">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  {user.role === "admin" ? (
                    <button
                      className="btn bg-red-400"
                      onClick={() => {
                        handleRemoveAdmin(user);
                      }}
                    >
                      <FiShieldOff></FiShieldOff>
                    </button>
                  ) : (
                    <button
                      className="btn bg-green-500"
                      onClick={() => handleMakeUser(user)}
                    >
                      <FaUserShield></FaUserShield>
                    </button>
                  )}
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">
                    other actions
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManagement;
