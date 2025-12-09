import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { isLoading: roleLoading, data: role } = useQuery({
    queryKey: ["user role", user?.email],
    enabled: !!user?.email, // do not run until email exists
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}/role`);
      return res.data?.role || "user"; // MUST return!
    },
    initialData: null, // do not force "user"
  });

  return { role, roleLoading };
};

export default useRole;
