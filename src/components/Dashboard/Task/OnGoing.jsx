import Loader from "../../shared/Loader";
import useAllTasks from "../../../hooks/useAllTasks";

const OnGoing = () => {
  const { tasks, isLoading } = useAllTasks();
  if (isLoading) return <Loader />;

  return <div>hello</div>;
};

export default OnGoing;
