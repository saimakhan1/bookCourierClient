import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaEye, FaUserCheck } from "react-icons/fa";
import { IoPersonRemove } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { time } from "framer-motion";

const ApproveLibrarians = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: librarians = [] } = useQuery({
    queryKey: ["riders", "pending"],
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
    <div>
      <h2 className="text-4xl font-bold">
        Librarians Pending Approval:{librarians.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
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
              <tr>
                <th>{index + 1}</th>
                <td>{librarian.name}</td>
                <td>{librarian.email}</td>

                <td>{librarian.birthday}</td>
                <td>{librarian.gender}</td>
                <td>{librarian.phone}</td>
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
                <td>
                  <button>
                    <FaEye></FaEye>
                  </button>
                  <button
                    onClick={() => handleApproval(librarian)}
                    className="btn"
                  >
                    <FaUserCheck></FaUserCheck>
                  </button>
                  <button
                    onClick={() => handleRejection(librarian)}
                    className="btn"
                  >
                    <IoPersonRemove />
                  </button>
                  <button>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveLibrarians;
