import useAllTasks from "../../hooks/useAllTasks";
import Loader from "../../components/shared/Loader";

import { deleteTask, saveNotifications } from "../../api/user";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import TableHead from "../../components/Dashboard/Task/TableHead";

import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useNotifications from "../../hooks/useNotifications";

const Todo = () => {
  const { tasks, refetch } = useAllTasks();
  const { user } = useAuth();
  const [todos, setTodos] = useState([]);
  const [onGoing, setOngoing] = useState([]);
  const [completed, setCompleted] = useState([]);
  const { refetch: notifyRef } = useNotifications();
  useEffect(() => {
    const processTasks = async () => {
      const todos = tasks?.filter((task) => task?.status === "todo");
      const onGoing = tasks?.filter((task) => task?.status === "onGoing");
      const completed = tasks?.filter((task) => task?.status === "completed");
      setTodos(todos);
      setOngoing(onGoing);
      setCompleted(completed);

      for (const task of tasks || []) {
        const deadlineDate = new Date(task.deadline);
        const currentDate = new Date();

        if (deadlineDate < currentDate) {
          // Task deadline is overdue
          const notificationMessage = `Task deadline for ${task.title} is overdue.`;

          const notification = {
            taskId: task?._id,
            notificationMessage,
            email: user?.email,
          };

          const dbRes = await saveNotifications(notification);
          if (dbRes.upsertedId) {
            notifyRef();
            toast.error(notificationMessage);
          }
        }
      }
    };

    processTasks();
  }, [tasks, user, notifyRef]);
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
      <div className="flex  flex-wrap justify-around p-5 gap-4">
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
