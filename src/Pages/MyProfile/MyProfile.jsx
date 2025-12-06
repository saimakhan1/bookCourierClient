import React, { useState } from "react";

import { updateProfile } from "firebase/auth";
import useAuth from "../../hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();

  const [name, setName] = useState(user?.displayName || "");
  const [newPhoto, setNewPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    let photoURL = user?.photoURL;

    // Upload new photo if provided
    if (newPhoto) {
      const formData = new FormData();
      formData.append("image", newPhoto);

      const res = await fetch("https://your-image-upload-api.com/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      photoURL = data.url;
    }

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });

      alert("Profile updated!");
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Update failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">My Profile</h1>

      {/* Profile Card */}
      <div className="bg-white shadow rounded-xl p-6 mb-8 flex flex-col items-center">
        <img
          src={user?.photoURL || "https://i.ibb.co/2FsfXqM/user.png"}
          alt="User"
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow"
        />

        <h2 className="text-2xl font-semibold mt-4">
          {user?.displayName || "No Name"}
        </h2>

        <p className="text-gray-600">{user?.email}</p>
      </div>

      {/* Update Form */}
      <div className="bg-white shadow rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Update Profile</h3>

        <form onSubmit={handleUpdate}>
          {/* Name */}
          <label className="font-semibold">Name</label>
          <input
            type="text"
            className="w-full border p-2 rounded mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          {/* Upload Photo */}
          <label className="font-semibold">Profile Image</label>
          <input
            type="file"
            accept="image/*"
            className="w-full border p-2 rounded mb-4"
            onChange={(e) => setNewPhoto(e.target.files[0])}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
