import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaUserCheck } from "react-icons/fa";
import { IoPersonRemove } from "react-icons/io5";
import Swal from "sweetalert2";

const ApproveLibrarians = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: librarians = [] } = useQuery({
    queryKey: ["librarians", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/librarians");
      return res.data;
    },
  });

  const updateLibrarianStatus = (librarian, status) => {
    const updateInfo = { status: status, email: librarian.email };
    axiosSecure
      .patch(`/librarians/${librarian._id}`, updateInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Librarian status is set to ${status}`,
            showConfirmButton: false,
            timer: 2300,
          });
        }
      });
  };

  const handleApproval = (librarian) => {
    updateLibrarianStatus(librarian, "approved");
  };

  const handleRejection = (librarian) => {
    updateLibrarianStatus(librarian, "rejected");
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-4">
        Librarians Pending Approval: {librarians.length}
      </h2>

      {/* DESKTOP / TABLET TABLE VIEW */}
      <div className="overflow-x-auto hidden md:block">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Birthday</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {librarians.map((librarian, index) => (
              <tr key={librarian._id}>
                <th>{index + 1}</th>
                <td>{librarian.name}</td>
                <td>{librarian.email}</td>
                <td>{librarian.phone}</td>
                <td>{librarian.birthday}</td>
                <td>{librarian.gender}</td>
                <td>
                  <p
                    className={`${
                      librarian.status === "approved"
                        ? "text-green-700"
                        : "text-red-500"
                    }`}
                  >
                    {librarian.status}
                  </p>
                </td>
                <td className="flex gap-2">
                  <button
                    onClick={() => handleApproval(librarian)}
                    className="btn btn-sm"
                  >
                    <FaUserCheck />
                  </button>
                  <button
                    onClick={() => handleRejection(librarian)}
                    className="btn btn-sm"
                  >
                    <IoPersonRemove />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARD VIEW */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {librarians.map((librarian, index) => (
          <div
            key={librarian._id}
            className="p-4 border rounded-lg shadow bg-white dark:bg-gray-800"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold text-lg">
                  {index + 1}. {librarian.name}
                </p>
                <p className="text-sm text-gray-600">
                  Email: {librarian.email}
                </p>
                <p className="text-sm">Phone: {librarian.phone}</p>
                <p className="text-sm">Birthday: {librarian.birthday}</p>
                <p className="text-sm">Gender: {librarian.gender}</p>
                <p className="text-sm">
                  Status:{" "}
                  <span
                    className={`${
                      librarian.status === "approved"
                        ? "text-green-700"
                        : "text-red-500"
                    } font-semibold`}
                  >
                    {librarian.status}
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleApproval(librarian)}
                  className="btn btn-sm"
                >
                  <FaUserCheck />
                </button>
                <button
                  onClick={() => handleRejection(librarian)}
                  className="btn btn-sm"
                >
                  <IoPersonRemove />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApproveLibrarians;
