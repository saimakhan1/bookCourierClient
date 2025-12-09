import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddBook = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    price: "",
    status: "published",
    publicationDate: "",
    cover: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const payload = {
        title: form.title,
        author: form.author,
        price: Number(form.price) || 0,
        status: form.status,
        publicationDate: form.publicationDate || null,
        cover: form.cover, // URL
      };

      const res = await axiosSecure.post("/books", payload);
      if (res.data.insertedId) {
        Swal.fire("Added", "Book added successfully", "success");
        navigate("/dashboard/my-books");
      } else {
        Swal.fire("Saved", "Book added", "success");
        navigate("/dashboard/my-books");
      }
    } catch (err) {
      console.error(err);
      Swal.fire(
        "Error",
        err?.response?.data?.message || "Failed to add book",
        "error"
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add Book</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-4 rounded shadow"
      >
        <input
          name="title"
          value={form.title}
          onChange={onChange}
          placeholder="Book Title"
          className="input w-full"
          required
        />
        <input
          name="author"
          value={form.author}
          onChange={onChange}
          placeholder="Author"
          className="input w-full"
          required
        />
        <input
          name="price"
          value={form.price}
          onChange={onChange}
          type="number"
          step="0.01"
          placeholder="Price"
          className="input w-full"
          required
        />
        <input
          name="cover"
          value={form.cover}
          onChange={onChange}
          placeholder="Cover Image URL (or upload in librarian dashboard)"
          className="input w-full"
        />
        <input
          name="publicationDate"
          value={form.publicationDate}
          onChange={onChange}
          type="date"
          className="input w-full"
        />
        <select
          name="status"
          value={form.status}
          onChange={onChange}
          className="select w-full"
        >
          <option value="published">published</option>
          <option value="unpublished">unpublished</option>
        </select>
        <button
          disabled={submitting}
          className="btn btn-primary w-full"
          type="submit"
        >
          {submitting ? "Adding..." : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default AddBook;
