import { useQuery } from "@tanstack/react-query";
import { getAllTasks } from "../api/user";
import useAuth from "./useAuth";

const useAllTasks = () => {
  const { user } = useAuth();
  const {
    data: tasks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await getAllTasks(user?.email);
      return res;
    },
  });

  return { tasks, isLoading, refetch };
};

export default useAllTasks;
