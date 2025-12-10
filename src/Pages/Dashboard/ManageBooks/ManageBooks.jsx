import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageBooks = () => {
  const axiosSecure = useAxiosSecure();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const res = await axiosSecure.get("/admin/books");
      setBooks(res.data);
    } catch (err) {
      console.error("Failed to fetch admin books:", err);
      Swal.fire("Error", "Failed to load books", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const changeStatus = async (bookId, newStatus) => {
    try {
      const res = await axiosSecure.patch(`/books/status/${bookId}`, {
        status: newStatus,
      });
      if (res.data.modifiedCount > 0) {
        Swal.fire("Success", `Book is now ${newStatus}`, "success");
        fetchBooks();
      } else {
        Swal.fire("Info", "No change applied", "info");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Could not update status", "error");
    }
  };

  const deleteBook = (bookId) => {
    Swal.fire({
      title: "Delete book?",
      text: "This will remove the book AND all related orders.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.delete(`/books/${bookId}`);
          if (res.data.deletedBook?.deletedCount > 0) {
            Swal.fire(
              "Deleted",
              "Book and its orders have been removed",
              "success"
            );
            fetchBooks();
          } else {
            Swal.fire("Error", "Book not deleted", "error");
          }
        } catch (err) {
          console.error(err);
          Swal.fire("Error", "Failed to delete book", "error");
        }
      }
    });
  };

  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Manage Books ({books.length})</h2>

      {/* DESKTOP / TABLET TABLE VIEW */}
      <div className="overflow-x-auto hidden md:block">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Cover</th>
              <th>Title / Author</th>
              <th>Owner/Librarian Email</th>
              <th>Status</th>
              <th>Actions</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {books.map((b) => (
              <tr key={b._id}>
                <td className="w-24">
                  <img
                    src={b.cover || "https://i.ibb.co/2FsfXqM/user.png"}
                    alt={b.title}
                    className="w-20 h-24 object-cover rounded"
                  />
                </td>
                <td>
                  <div className="font-semibold">{b.title}</div>
                  <div className="text-sm text-gray-600">by {b.author}</div>
                </td>
                <td>{b.ownerEmail || "—"}</td>
                <td>
                  {b.status === "published" ? (
                    <span className="badge badge-success">Published</span>
                  ) : (
                    <span className="badge badge-warning">Unpublished</span>
                  )}
                </td>
                <td>
                  {b.status === "published" ? (
                    <button
                      className="btn btn-sm btn-warning mr-2"
                      onClick={() => changeStatus(b._id, "unpublished")}
                    >
                      Unpublish
                    </button>
                  ) : (
                    <button
                      className="btn btn-sm btn-success mr-2"
                      onClick={() => changeStatus(b._id, "published")}
                    >
                      Publish
                    </button>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => deleteBook(b._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARD VIEW */}
      <div className="md:hidden grid grid-cols-1 gap-4 mt-4">
        {books.map((b) => (
          <div
            key={b._id}
            className="border rounded-lg p-4 bg-white shadow dark:bg-gray-800"
          >
            {/* IMAGE ON TOP */}
            <img
              src={b.cover || "https://i.ibb.co/2FsfXqM/user.png"}
              alt={b.title}
              className="w-full h-48 object-cover rounded mb-3"
            />

            {/* TEXT STACKED BELOW */}
            <div>
              <p className="font-bold text-lg">{b.title}</p>
              <p className="text-sm text-gray-600 mb-1">by {b.author}</p>
              <p className="text-sm mb-1">Owner: {b.ownerEmail || "—"}</p>
              <p className="text-sm mb-2">
                Status:{" "}
                {b.status === "published" ? (
                  <span className="text-green-600">Published</span>
                ) : (
                  <span className="text-yellow-600">Unpublished</span>
                )}
              </p>
            </div>

            {/* BUTTONS STACKED */}
            <div className="flex flex-col gap-2 mt-3">
              {b.status === "published" ? (
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() => changeStatus(b._id, "unpublished")}
                >
                  Unpublish
                </button>
              ) : (
                <button
                  className="btn btn-sm btn-success"
                  onClick={() => changeStatus(b._id, "published")}
                >
                  Publish
                </button>
              )}
              <button
                className="btn btn-sm btn-error"
                onClick={() => deleteBook(b._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageBooks;
