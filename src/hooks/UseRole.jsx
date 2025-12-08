// import { useQuery } from "@tanstack/react-query";
// import React from "react";
// import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";

// const UseRole = () => {
//   const { user } = useAuth();
//   const axiosSecure = useAxiosSecure();
//   const { isLoading, data: role = "user" } = useQuery({
//     queryKey: ["user role", user?.email],
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/users/${user.email}/role`);
//     },
//   });
//   return { role, isLoading };
// };

// export default UseRole;

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const UseRole = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { isLoading, data: role } = useQuery({
    queryKey: ["user role", user?.email],
    enabled: !!user?.email, // do not run until email exists
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}/role`);
      return res.data.role; // MUST return!
    },
    initialData: null, // do not force "user"
  });

  return { role, isLoading };
};

export default UseRole;
