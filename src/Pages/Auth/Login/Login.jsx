// import React from "react";
// import { useForm } from "react-hook-form";
// import useAuth from "../../../hooks/useAuth";
// import { NavLink, useLocation, useNavigate } from "react-router";
// import SocialLogin from "../SocialLogin/SocialLogin";

// const Login = () => {
//   const { signInUser } = useAuth();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const handleLogIn = (data) => {
//     console.log("form data", data);
//     return signInUser(data.email, data.password)
//       .then((result) => {
//         console.log(result.user);
//         navigate(location?.state || "/");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   return (
//     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//       <div className=" text-center">
//         <h3 className="text-3xl font-bold">Welcome Back</h3>
//         <p>Please Log In</p>
//       </div>
//       <form onSubmit={handleSubmit(handleLogIn)} className="card-body">
//         <fieldset className="fieldset">
//           {/* Email Field */}
//           <label className="label">Email</label>
//           <input
//             type="email"
//             {...register("email", { required: true })}
//             className="input"
//             placeholder="Email"
//           />
//           {errors.email?.type === "required" && (
//             <p className="text-red-500">Email is required</p>
//           )}

//           {/* Password Field */}
//           <label className="label">Password</label>
//           <input
//             type="password"
//             {...register("password", { required: true })}
//             className="input"
//             placeholder="Password"
//           />
//           {errors.password?.type === "required" && (
//             <p className="text-red-500">Password is required</p>
//           )}
//           <div>
//             <a className="link link-hover">Forgot password?</a>
//           </div>
//           <button className="btn btn-neutral mt-4">Login</button>
//         </fieldset>

//         <p>
//           New to BookCourier?{" "}
//           <NavLink
//             state={location.state}
//             className={"text-blue-500 underline"}
//             to={"/register"}
//           >
//             Register
//           </NavLink>
//         </p>
//       </form>
//       <SocialLogin></SocialLogin>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import useAuth from "../../../hooks/useAuth";
// import { NavLink, useLocation, useNavigate } from "react-router";
// import SocialLogin from "../SocialLogin/SocialLogin";

// const Login = () => {
//   const { signInUser } = useAuth();
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [authError, setAuthError] = useState("");

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   // ✅ Demo user credentials
//   const demoUser = {
//     email: "sonia@gmail.com",
//     password: "sonia1A",
//   };

//   const handleLogIn = (data) => {
//     setAuthError("");

//     return signInUser(data.email, data.password)
//       .then((result) => {
//         navigate(location?.state || "/");
//       })
//       .catch((error) => {
//         setAuthError(error.message);
//       });
//   };

//   // ✅ Demo login handler
//   const handleDemoLogin = (e) => {
//     e.preventDefault();
//     setAuthError("");

//     signInUser(demoUser.email, demoUser.password)
//       .then((result) => {
//         navigate(location?.state || "/");
//       })
//       .catch((error) => {
//         setAuthError(error.message);
//       });
//   };

//   return (
//     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//       <div className="text-center">
//         <h3 className="text-3xl font-bold">Welcome Back</h3>
//         <p>Please Log In</p>
//       </div>

//       <form onSubmit={handleSubmit(handleLogIn)} className="card-body">
//         <fieldset className="fieldset">
//           {/* Email Field */}
//           <label className="label">Email</label>
//           <input
//             type="email"
//             {...register("email", { required: true })}
//             className="input"
//             placeholder="Email"
//           />
//           {errors.email?.type === "required" && (
//             <p className="text-red-500">Email is required</p>
//           )}

//           {/* Password Field */}
//           <label className="label">Password</label>
//           <input
//             type="password"
//             {...register("password", { required: true })}
//             className="input"
//             placeholder="Password"
//           />
//           {errors.password?.type === "required" && (
//             <p className="text-red-500">Password is required</p>
//           )}

//           {/* 🔥 Auth Error Message */}
//           {authError && (
//             <p className="text-red-500 text-sm mt-2">{authError}</p>
//           )}

//           <div>
//             <a className="link link-hover">Forgot password?</a>
//           </div>

//           {/* Normal Login */}
//           <button className="btn btn-neutral mt-4">Login</button>

//           {/* Demo Login */}
//           <button
//             type="button"
//             onClick={handleDemoLogin}
//             className="btn btn-outline btn-info mt-2"
//           >
//             Login as Demo User
//           </button>
//         </fieldset>

//         <p>
//           New to BookCourier?{" "}
//           <NavLink
//             state={location.state}
//             className="text-blue-500 underline"
//             to={"/register"}
//           >
//             Register
//           </NavLink>
//         </p>
//       </form>

//       <SocialLogin />
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { NavLink, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const { signInUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [authError, setAuthError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Demo user credentials
  const demoUser = {
    email: "sonia@gmail.com",
    password: "sonia1A",
  };

  // 🔑 Correct redirect after login
  const handleLogIn = (data) => {
    setAuthError("");

    return signInUser(data.email, data.password)
      .then((result) => {
        const from = location.state?.from || "/";
        navigate(from, { replace: true }); // ✅ redirect to original page
      })
      .catch((error) => {
        setAuthError(error.message);
      });
  };

  // Demo login handler
  const handleDemoLogin = (e) => {
    e.preventDefault();
    setAuthError("");

    signInUser(demoUser.email, demoUser.password)
      .then((result) => {
        const from = location.state?.from || "/";
        navigate(from, { replace: true }); // ✅ redirect to original page
      })
      .catch((error) => {
        setAuthError(error.message);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="text-center">
        <h3 className="text-3xl font-bold">Welcome Back</h3>
        <p>Please Log In</p>
      </div>

      <form onSubmit={handleSubmit(handleLogIn)} className="card-body">
        <fieldset className="fieldset">
          {/* Email Field */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}

          {/* Password Field */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required</p>
          )}

          {/* Auth Error */}
          {authError && <p className="text-red-500 text-sm mt-2">{authError}</p>}

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>

          {/* Normal Login */}
          <button className="btn btn-neutral mt-4">Login</button>

          {/* Demo Login */}
          <button
            type="button"
            onClick={handleDemoLogin}
            className="btn btn-outline btn-info mt-2"
          >
            Login as Demo User
          </button>
        </fieldset>

        <p>
          New to BookCourier?{" "}
          <NavLink
            state={location.state} // keep original redirect for register too
            className="text-blue-500 underline"
            to={"/register"}
          >
            Register
          </NavLink>
        </p>
      </form>

      <SocialLogin />
    </div>
  );
};

export default Login;
