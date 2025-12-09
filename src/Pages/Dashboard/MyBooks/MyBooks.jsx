// import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useAuth from "../../../hooks/useAuth";
// import Swal from "sweetalert2";

// const MyBooks = () => {
//   const axiosSecure = useAxiosSecure();
//   const { user } = useAuth();

//   const {
//     data: books = [],
//     isLoading,
//     isError,
//     refetch,
//   } = useQuery({
//     queryKey: ["my-books", user?.email],
//     enabled: !!user?.email, // wait until user email exists
//     queryFn: async () => {
//       // axiosSecure already adds auth header
//       const res = await axiosSecure.get("/my-books");
//       return res.data;
//     },
//   });

//   const togglePublish = async (book) => {
//     const newStatus = book.status === "published" ? "unpublished" : "published";
//     const confirm = await Swal.fire({
//       title: `Are you sure?`,
//       text: `Change status to "${newStatus}" for "${book.title}"?`,
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, change it",
//     });
//     if (!confirm.isConfirmed) return;

//     try {
//       await axiosSecure.patch(`/books/${book._id}`, { status: newStatus });
//       Swal.fire("Updated", `Book status updated to "${newStatus}"`, "success");
//       refetch();
//     } catch (err) {
//       console.error("Failed to update book status:", err);
//       Swal.fire("Error", "Failed to update book status", "error");
//     }
//   };

//   if (isLoading) return <div>Loading...</div>;
//   if (isError) return <div>Failed to load your books.</div>;

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold">My Books ({books.length})</h2>

//       {books.length === 0 ? (
//         <div className="mt-4 text-gray-600">
//           You have not added any books yet.
//         </div>
//       ) : (
//         <div className="overflow-x-auto mt-4">
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Cover</th>
//                 <th>Title</th>
//                 <th>Author</th>
//                 <th>Price</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               {books.map((b, i) => (
//                 <tr key={b._id}>
//                   <th>{i + 1}</th>
//                   <td>
//                     {b.cover ? (
//                       <img
//                         src={b.cover}
//                         alt={b.title}
//                         className="h-16 w-12 object-cover rounded"
//                       />
//                     ) : (
//                       "N/A"
//                     )}
//                   </td>
//                   <td>{b.title}</td>
//                   <td>{b.author}</td>
//                   <td>${Number(b.price).toFixed(2)}</td>
//                   <td>{b.status}</td>
//                   <td>
//                     <button
//                       className="btn btn-sm mr-2"
//                       onClick={() => togglePublish(b)}
//                     >
//                       {b.status === "published" ? "Unpublish" : "Publish"}
//                     </button>

//                     <button
//                       className="btn btn-sm"
//                       onClick={() => {
//                         // navigate to edit page or open modal - placeholder
//                         // e.g. navigate(`/dashboard/add-book?editId=${b._id}`)
//                         Swal.fire(
//                           "Edit",
//                           "Edit flow not implemented (click to implement)",
//                           "info"
//                         );
//                       }}
//                     >
//                       Edit
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyBooks;

import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const MyBooks = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  const {
    data: books = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["my-books", user?.email],
    enabled: !!user?.email, // wait until user email exists
    queryFn: async () => {
      // axiosSecure already adds auth header
      const res = await axiosSecure.get("/my-books");
      return res.data;
    },
  });

  const togglePublish = async (book) => {
    const newStatus = book.status === "published" ? "unpublished" : "published";
    const confirm = await Swal.fire({
      title: `Are you sure?`,
      text: `Change status to "${newStatus}" for "${book.title}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, change it",
    });
    if (!confirm.isConfirmed) return;

    try {
      await axiosSecure.patch(`/books/${book._id}`, { status: newStatus });
      Swal.fire("Updated", `Book status updated to "${newStatus}"`, "success");
      refetch();
    } catch (err) {
      console.error("Failed to update book status:", err);
      Swal.fire("Error", "Failed to update book status", "error");
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Failed to load your books.</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">My Books ({books.length})</h2>

      {books.length === 0 ? (
        <div className="mt-4 text-gray-600">
          You have not added any books yet.
        </div>
      ) : (
        <div className="overflow-x-auto mt-4">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Cover</th>
                <th>Title</th>
                <th>Author</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {books.map((b, i) => (
                <tr key={b._id}>
                  <th>{i + 1}</th>
                  <td>
                    {b.cover ? (
                      <img
                        src={b.cover}
                        alt={b.title}
                        className="h-16 w-12 object-cover rounded"
                      />
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td>{b.title}</td>
                  <td>{b.author}</td>
                  <td>${Number(b.price).toFixed(2)}</td>
                  <td>{b.status}</td>
                  <td>
                    <button
                      className="btn btn-sm mr-2"
                      onClick={() => togglePublish(b)}
                    >
                      {b.status === "published" ? "Unpublish" : "Publish"}
                    </button>

                    <button
                      className="btn btn-sm"
                      onClick={() => navigate(`/dashboard/edit-book/${b._id}`)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBooks;
