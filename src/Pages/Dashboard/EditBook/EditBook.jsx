import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  // Load book data by ID
  const { data: book, isLoading } = useQuery({
    queryKey: ["book", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/books/${id}`);
      return res.data;
    },
    retry: false, // do not retry if 404
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Wait until data is loaded then set form values
  React.useEffect(() => {
    if (book) {
      reset(book);
    }
  }, [book, reset]);

  const onSubmit = async (updatedBook) => {
    try {
      const res = await axiosSecure.patch(`/books/${id}`, updatedBook);

      if (res.data.success) {
        Swal.fire({
          icon: "success",
          title: res.data.message,
          timer: 1200,
          showConfirmButton: false,
        });

        navigate("/dashboard/my-books");
      } else {
        Swal.fire("Error", res.data.message, "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to update the book", "error");
    }
  };

  if (isLoading) return <p className="text-center p-10">Loading book...</p>;
  if (!book) return <p className="text-center p-10">Book not found</p>;

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow mt-10">
      <h2 className="text-3xl font-bold mb-6">Edit Book</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block font-semibold mb-1">Book Title</label>
          <input
            type="text"
            {...register("title", { required: true })}
            className="input input-bordered w-full"
          />
          {errors.title && (
            <span className="text-red-500 text-sm">Title is required</span>
          )}
        </div>

        {/* Author */}
        <div>
          <label className="block font-semibold mb-1">Author</label>
          <input
            type="text"
            {...register("author", { required: true })}
            className="input input-bordered w-full"
          />
          {errors.author && (
            <span className="text-red-500 text-sm">Author is required</span>
          )}
        </div>

        {/* Price */}
        <div>
          <label className="block font-semibold mb-1">Price</label>
          <input
            type="number"
            step="0.01"
            {...register("price", { required: true, min: 0 })}
            className="input input-bordered w-full"
          />
          {errors.price && (
            <span className="text-red-500 text-sm">Price is required</span>
          )}
        </div>

        {/* Cover URL */}
        <div>
          <label className="block font-semibold mb-1">Cover Image URL</label>
          <input
            type="text"
            {...register("cover")}
            className="input input-bordered w-full"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            {...register("description")}
            className="textarea textarea-bordered w-full"
            rows={4}
          ></textarea>
        </div>

        {/* Status */}
        <div>
          <label className="block font-semibold mb-1">Status</label>
          <select
            {...register("status")}
            className="select select-bordered w-full"
          >
            <option value="published">Published</option>
            <option value="unpublished">Unpublished</option>
          </select>
        </div>

        {/* Save Button */}
        <button type="submit" className="btn btn-primary w-full mt-4">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditBook;
