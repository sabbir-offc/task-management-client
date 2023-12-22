import { getNotifications } from "../api/user";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useNotifications = () => {
  const { user } = useAuth();
  const {
    data: notifications = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["notifications"],
    queryFn: async () => {
      const res = await getNotifications(user?.email);
      return res;
    },
  });
  return { notifications, isLoading, refetch };
};

export default useNotifications;
