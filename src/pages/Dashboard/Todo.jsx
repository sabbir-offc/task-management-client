import useAllTasks from "../../hooks/useAllTasks";
import Loader from "../../components/shared/Loader";

import { deleteTask } from "../../api/user";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import TableHead from "../../components/Dashboard/Task/TableHead";

const Todo = () => {
  const { tasks, isLoading, refetch } = useAllTasks();
  const [todos, setTodos] = useState([]);
  const [onGoing, setOngoing] = useState([]);
  const [completed, setCompleted] = useState([]);
  isLoading && <Loader />;

  useEffect(() => {
    const todos = tasks?.filter((task) => task?.status === "todo");
    const onGoing = tasks?.filter((task) => task?.status === "onGoing");
    const completed = tasks?.filter((task) => task?.status === "completed");
    setOngoing(onGoing);
    setTodos(todos);
    setCompleted(completed);
  }, [tasks]);
  const handleDeleteTask = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const dbRes = await deleteTask(id);
          console.log(dbRes);
          if (dbRes.deletedCount > 0) {
            refetch();
            return Swal.fire({
              title: "Deleted!",
              text: "Your task has been deleted.",
              icon: "success",
            });
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const statuses = ["todo", "onGoing", "completed"];

  return (
    <div>
      <div className="grid  md:grid-cols-12 p-5 gap-1">
        {statuses?.map((status, idx) => (
          <TableHead
            handleDeleteTask={handleDeleteTask}
            key={idx}
            status={status}
            tasks={tasks}
            onGoing={onGoing}
            refetch={refetch}
            completed={completed}
            todos={todos}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
