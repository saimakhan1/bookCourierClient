// import React from "react";
// import { useForm } from "react-hook-form";
// import useAuth from "../../hooks/useAuth";
// import useAxiosSecure from "../../hooks/useAxiosSecure";

// const Librarian = () => {
//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm();
//   const { user } = useAuth();
//   const axiosSecure = useAxiosSecure();

//   const handleLibrarianApplication = (data) => {
//     console.log(data);
//   };
//   return (
//     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//       <h2 className="text-4xl text-primary">Be A Librarian</h2>
//       <form
//         onSubmit={handleSubmit(handleLibrarianApplication)}
//         className="card-body"
//       >
//         <fieldset className="fieldset">
//           {/* Name field  */}
//           <label className="label">Name</label>
//           <input
//             type="text"
//             {...register("name", { required: true })}
//             className="input"
//             placeholder="Your Name"
//           />
//           {/* {errors.name?.type === "required" && (
//             <p className="text-red-500"> Name is Required</p>
//           )} */}

//           {/* Image field  */}
//           <label className="label">Photo</label>
//           <input
//             type="file"
//             {...register("photo", { required: true })}
//             className="file-input"
//             placeholder="Your Photo"
//           />
//           {/* {errors.photo?.type === "required" && (
//             <p className="text-red-500"> Photo is Required</p>
//           )} */}

//           {/* email field  */}
//           <label className="label">Email</label>
//           <input
//             type="email"
//             {...register("email", { required: true })}
//             className="input"
//             placeholder="Email"
//           />
//           {errors.email?.type === "required" && (
//             <p className="text-red-500"> Email is Required</p>
//           )}

//           {/* password field */}
//           <label className="label">Password</label>
//           <input
//             type="password"
//             {...register("password", {
//               required: true,
//               minLength: 6,
//               pattern: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
//             })}
//             className="input"
//             placeholder="Password"
//           />
//           {errors.password?.type === "required" && (
//             <p className="text-red-500">Password is required</p>
//           )}
//           {errors.password?.type === "minLength" && (
//             <p className="text-red-500">
//               Password must be at least 6 characters
//             </p>
//           )}
//           {errors.password?.type === "pattern" && (
//             <p className="text-red-500">
//               Password must have at least one uppercase and one lowercase letter
//             </p>
//           )}
//           <div>
//             <a className="link link-hover">Forgot password?</a>
//           </div>
//           <button className="btn btn-neutral mt-4">Apply as a Librarian</button>
//         </fieldset>
//       </form>
//     </div>
//   );
// };

// export default Librarian;

import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Librarian = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Validate birthday (must be 18 or older)
  const validateAge = (value) => {
    const today = new Date();
    const birthday = new Date(value);
    const age = today.getFullYear() - birthday.getFullYear();
    const monthDiff = today.getMonth() - birthday.getMonth();
    const dayDiff = today.getDate() - birthday.getDate();

    if (
      age > 18 ||
      (age === 18 && (monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)))
    ) {
      return true;
    }
    return "Applicant must be at least 18 years old";
  };

  const handleLibrarianApplication = async (data) => {
    console.log("form data", data);
    // try {
    //   const formData = new FormData();
    //   formData.append("name", data.name);
    //   formData.append("email", data.email);
    //   formData.append("password", data.password);
    //   formData.append("photo", data.photo[0]);

    //   // NEW FIELDS
    //   formData.append("birthday", data.birthday);
    //   formData.append("gender", data.gender);
    //   formData.append("phone", data.phone);
    //   formData.append("nid", data.nid);
    //   formData.append("address", data.address);
    //   formData.append("education", data.education);

    //   const res = await axiosSecure.post("/apply-librarian", formData, {
    //     headers: { "Content-Type": "multipart/form-data" },
    //   });

    //   if (res.data.insertedId) {
    //     Swal.fire({
    //       title: "Application Submitted!",
    //       text: "Your librarian application was submitted successfully.",
    //       icon: "success",
    //       confirmButtonColor: "#3085d6",
    //     });
    //   }

    //   reset();
    // } catch (error) {
    //   console.error(error);

    //   Swal.fire({
    //     title: "Error!",
    //     text: "Something went wrong. Please try again.",
    //     icon: "error",
    //     confirmButtonColor: "#d33",
    //   });
    // }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-2xl mx-auto p-6 shadow-2xl">
        <h2 className="text-3xl text-primary font-bold text-center mb-4">
          Be A Librarian
        </h2>

        <form onSubmit={handleSubmit(handleLibrarianApplication)}>
          {/* 2 COLUMN AREA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* NAME */}
            <div>
              <label className="label font-semibold">Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                defaultValue={user?.displayName}
                className="input input-bordered w-full"
                placeholder="Your Name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* PHOTO */}
            <div>
              <label className="label font-semibold">Photo</label>
              <input
                type="file"
                {...register("photo", { required: "Photo is required" })}
                className="file-input file-input-bordered w-full"
              />
              {errors.photo && (
                <p className="text-red-500 text-sm">{errors.photo.message}</p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="label font-semibold">Email</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                defaultValue={user?.email}
                className="input input-bordered w-full"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* PHONE */}
            <div>
              <label className="label font-semibold">Phone Number</label>
              <input
                type="text"
                {...register("phone", { required: "Phone is required" })}
                className="input input-bordered w-full"
                placeholder="Phone Number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            {/* BIRTHDAY - 18+ validation */}
            <div>
              <label className="label font-semibold">Birthday</label>
              <input
                type="date"
                {...register("birthday", {
                  required: "Birthday is required",
                  validate: validateAge,
                })}
                className="input input-bordered w-full"
              />
              {errors.birthday && (
                <p className="text-red-500 text-sm">
                  {errors.birthday.message}
                </p>
              )}
            </div>

            {/* GENDER */}
            <div>
              <label className="label font-semibold">Gender</label>
              <select
                {...register("gender", { required: "Gender is required" })}
                className="select select-bordered w-full"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-sm">{errors.gender.message}</p>
              )}
            </div>

            {/* NID - exactly 12 digits */}
            <div>
              <label className="label font-semibold">NID Number</label>
              <input
                type="text"
                {...register("nid", {
                  required: "NID is required",
                  pattern: {
                    value: /^\d{12}$/,
                    message: "NID must be exactly 12 digits",
                  },
                })}
                className="input input-bordered w-full"
                placeholder="12-digit NID number"
              />
              {errors.nid && (
                <p className="text-red-500 text-sm">{errors.nid.message}</p>
              )}
            </div>

            {/* EDUCATION */}
            <div>
              <label className="label font-semibold">
                Highest Educational Qualification
              </label>
              <input
                type="text"
                {...register("education", {
                  required: "Educational qualification is required",
                })}
                className="input input-bordered w-full"
                placeholder="e.g. B.A, M.A, Diploma in Library Science"
              />
              {errors.education && (
                <p className="text-red-500 text-sm">
                  {errors.education.message}
                </p>
              )}
            </div>
          </div>

          {/* ADDRESS */}
          <div className="mt-3">
            <label className="label font-semibold">Address</label>
            <input
              type="text"
              {...register("address", { required: "Address is required" })}
              className="input input-bordered w-full"
              placeholder="Full Address"
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>

          {/* PASSWORD */}
          <div className="mt-3">
            <label className="label font-semibold">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
                  message: "Must include uppercase & lowercase letters",
                },
              })}
              className="input input-bordered w-full"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* SUBMIT */}
          <button className="btn btn-neutral w-full mt-5">
            Apply as a Librarian
          </button>
        </form>
      </div>
    </div>
  );
};

export default Librarian;
