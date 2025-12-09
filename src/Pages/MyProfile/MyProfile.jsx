// import React, { useState } from "react";
// import { updateProfile } from "firebase/auth";
// import useAuth from "../../hooks/useAuth";
// import axios from "axios";
// import Swal from "sweetalert2";

// const MyProfile = () => {
//   const { user } = useAuth();
//   const [name, setName] = useState(user?.displayName || "");
//   const [newPhoto, setNewPhoto] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     let photoURL = user?.photoURL;

//     try {
//       // Upload new photo if user selected one
//       if (newPhoto) {
//         const formData = new FormData();
//         formData.append("image", newPhoto);

//         const image_API_URL = `https://api.imgbb.com/1/upload?key=${
//           import.meta.env.VITE_image_host_key
//         }`;

//         const res = await axios.post(image_API_URL, formData);
//         photoURL = res.data.data.url;

//         if (!photoURL) {
//           throw new Error("Failed to upload image");
//         }
//       }

//       // Update Firebase profile
//       await updateProfile(user, { displayName: name, photoURL });

//       Swal.fire({
//         icon: "success",
//         title: "Profile Updated",
//         text: "Your profile has been updated successfully!",
//       });

//       // Optional: reload or just update local state
//       window.location.reload();
//     } catch (err) {
//       console.error(err);
//       Swal.fire({
//         icon: "error",
//         title: "Update Failed",
//         text:
//           err.message || "Something went wrong while updating your profile.",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">My Profile</h1>

//       {/* Profile Card */}
//       <div className="bg-white shadow rounded-xl p-6 mb-8 flex flex-col items-center">
//         <img
//           src={user?.photoURL || "https://i.ibb.co/2FsfXqM/user.png"}
//           alt="User"
//           className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow"
//         />

//         <h2 className="text-2xl font-semibold mt-4">
//           {user?.displayName || "No Name"}
//         </h2>

//         <p className="text-gray-600">{user?.email}</p>
//       </div>

//       {/* Update Form */}
//       <div className="bg-white shadow rounded-xl p-6">
//         <h3 className="text-xl font-semibold mb-4">Update Profile</h3>

//         <form onSubmit={handleUpdate}>
//           {/* Name */}
//           <label className="font-semibold">Name</label>
//           <input
//             type="text"
//             className="w-full border p-2 rounded mb-4"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />

//           {/* Upload Photo */}
//           <label className="font-semibold">Profile Image</label>
//           <input
//             type="file"
//             accept="image/*"
//             className="w-full border p-2 rounded mb-4"
//             onChange={(e) => setNewPhoto(e.target.files[0])}
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg hover:bg-blue-700 transition"
//           >
//             {loading ? "Updating..." : "Update Profile"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default MyProfile;

import React, { useState } from "react";
import { updateProfile } from "firebase/auth";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const MyProfile = () => {
  const { user } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  const [newPhoto, setNewPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    let photoURL = user?.photoURL;

    try {
      // Upload new photo if user selected one
      if (newPhoto) {
        const formData = new FormData();
        formData.append("image", newPhoto);

        const image_API_URL = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host_key
        }`;

        const res = await axios.post(image_API_URL, formData);
        photoURL = res.data.data.url;

        if (!photoURL) {
          throw new Error("Failed to upload image");
        }
      }

      // Update Firebase profile
      await updateProfile(user, { displayName: name, photoURL });

      Swal.fire({
        icon: "success",
        title: "Profile Updated",
        text: "Your profile has been updated successfully!",
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text:
          err.message || "Something went wrong while updating your profile.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
        My Profile
      </h1>

      {/* Profile Card */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 mb-8 flex flex-col items-center">
        <img
          src={user?.photoURL || "https://i.ibb.co/2FsfXqM/user.png"}
          alt="User"
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow"
        />

        <h2 className="text-2xl font-semibold mt-4 text-gray-900 dark:text-gray-100">
          {user?.displayName || "No Name"}
        </h2>

        <p className="text-gray-600 dark:text-gray-300">{user?.email}</p>
      </div>

      {/* Update Form */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Update Profile
        </h3>

        <form onSubmit={handleUpdate}>
          {/* Name */}
          <label className="font-semibold text-gray-900 dark:text-gray-100">
            Name
          </label>
          <input
            type="text"
            className="w-full border p-2 rounded mb-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          {/* Upload Photo */}
          <label className="font-semibold text-gray-900 dark:text-gray-100">
            Profile Image
          </label>
          <input
            type="file"
            accept="image/*"
            className="w-full border p-2 rounded mb-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
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
