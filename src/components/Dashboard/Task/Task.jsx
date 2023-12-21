import { Edit, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";

const Task = ({ task, handleDeleteTask }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task?._id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <tr
      key={task._id}
      ref={drag}
      className={` cursor-pointer ${isDragging ? "opacity-50" : "opacity-100"}`}
    >
      <td className="whitespace-nowrap px-4 py-4">
        <div className="text-sm text-gray-900 ">{task.title}</div>
        <div className="text-sm text-gray-700">{task.deadline}</div>
      </td>
      <td className="whitespace-nowrap px-12 py-4">
        <div className="text-sm text-gray-900">
          {task.description.slice(0, 10)}...
        </div>
      </td>
      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
        {task.priority}
      </td>
      <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
        <div className="flex justify-center items-center">
          <Link to={`/dashboard/update/${task._id}`}>
            <Edit color="green" />
          </Link>
          <button onClick={() => handleDeleteTask(task?._id)}>
            <Trash color="red" />
          </button>
        </div>
      </td>
    </tr>
  );
};

Task.propTypes = {
  task: PropTypes.object,
  handleDeleteTask: PropTypes.func,
};

export default Task;
