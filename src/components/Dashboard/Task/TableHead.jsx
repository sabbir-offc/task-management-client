import { useDrop } from "react-dnd";
import Task from "./Task";
import { updateTaskStatus } from "../../../api/user";
import PropTypes from "prop-types";

const TableHead = ({
  status,
  tasks,
  onGoing,
  completed,
  todos,
  refetch,
  handleDeleteTask,
}) => {
  let text = "Todo";
  let bg = "bg-gray-400";
  let tasksToMap = todos;
  if (status === "onGoing") {
    text = "On Going";
    bg = "bg-purple-500";
    tasksToMap = onGoing;
  }
  if (status === "completed") {
    text = "Completed";
    bg = "bg-green-500";
    tasksToMap = completed;
  }

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "task",
      drop: (item) => updateStatus(item.id, status),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    })
    // [x, y]
  );

  const updateStatus = async (id, status) => {
    const dbRes = await updateTaskStatus(id, status);
    if (dbRes.modifiedCount > 0) return refetch();
  };
  return (
    <div
      ref={drop}
      className={`md:col-span-6 lg:col-span-4 p-2 ${
        isOver ? "bg-slate-200 rounded-xl" : ""
      }`}
    >
      <div className="">
        <div>
          <h2
            className={`text-lg font-semibold ${bg} py-2 px-2  text-white rounded-lg shadow-md`}
          >
            {text}
          </h2>
        </div>
      </div>
      <div className="mt-6 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                    >
                      <span>Title</span>
                    </th>
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                    >
                      Description
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                    >
                      Priority
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {tasksToMap?.map((task) => (
                    <Task
                      handleDeleteTask={handleDeleteTask}
                      tasks={tasks}
                      task={task}
                      key={task._id}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
TableHead.propTypes = {
  status: PropTypes.string,
  tasks: PropTypes.array,
  onGoing: PropTypes.array,
  completed: PropTypes.array,
  todos: PropTypes.array,
  refetch: PropTypes.func,
  handleDeleteTask: PropTypes.func,
};

export default TableHead;
