import React from "react";

const OrderModal = ({ isOpen, setIsOpen, user, book, handlePlaceOrder }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Order: {book.title}
        </h2>

        <form onSubmit={handlePlaceOrder}>
          {/* Name */}
          <label className="font-semibold">Name</label>
          <input
            type="text"
            value={user?.displayName || "Unknown User"}
            readOnly
            className="w-full border p-2 rounded mb-3 bg-gray-100"
          />

          {/* Email */}
          <label className="font-semibold">Email</label>
          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="w-full border p-2 rounded mb-3 bg-gray-100"
          />

          {/* Phone */}
          <label className="font-semibold">Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter phone number"
            required
            className="w-full border p-2 rounded mb-3"
          />

          {/* Address */}
          <label className="font-semibold">Address</label>
          <textarea
            name="address"
            placeholder="Enter delivery address"
            rows="3"
            required
            className="w-full border p-2 rounded mb-3"
          ></textarea>

          {/* Buttons */}
          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;
