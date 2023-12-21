import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { saveTask } from "../../api/user";
import toast from "react-hot-toast";
const AddTask = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const title = data.title;
    const description = data.description;
    const deadline = data.deadline;
    const priority = data.priority;

    const taskInfo = {
      email: user?.email,
      title,
      description,
      deadline,
      priority,
    };
    try {
      const dbRes = await saveTask(taskInfo);
      if (dbRes.acknowledged) return toast.success("Task Added Successfully.");
      reset();
    } catch (error) {}
  };
  return (
    <div className="p-5">
      <h3 className="text-2xl text-center mb-5 text-[#FF9800] font-semibold">
        Fill your <span className="text-[#5F8670]">task</span> info here.
      </h3>

      <form
        className="w-2/3 mx-auto space-y-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label
            htmlFor="title"
            className="text-base font-medium text-gray-900"
          >
            Task Title
          </label>
          <div className="mt-2">
            <input
              {...register("title", { required: true })}
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              name="title"
              id="title"
              placeholder="Task Title"
            />
          </div>
          {errors.title?.type === "required" && (
            <span className="text-red-600">Title is required</span>
          )}
        </div>
        <div>
          <label
            htmlFor="description"
            className="text-base font-medium text-gray-900"
          >
            Task Description
          </label>
          <div className="mt-2">
            <textarea
              {...register("description", { required: true })}
              className="flex resize-none w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              name="description"
              id="description"
              placeholder="Task Description"
            />
          </div>
          {errors.description?.type === "required" && (
            <span className="text-red-600">Description is required</span>
          )}
        </div>
        <div className="flex justify-between items-center gap-2">
          <div className="flex-1">
            <label
              htmlFor="deadline"
              className="text-base font-medium text-gray-900"
            >
              Task Deadline
            </label>
            <div className="mt-2">
              <input
                {...register("deadline", { required: true })}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="date"
                name="deadline"
                id="deadline"
                placeholder="Task Title"
              />
            </div>
            {errors.deadline?.type === "required" && (
              <span className="text-red-600">Task Deadline is required</span>
            )}
          </div>
          <div className="flex-1">
            <label
              htmlFor="priority"
              className="text-base font-medium text-gray-900"
            >
              Task Priority
            </label>
            <div className="mt-2">
              <select
                {...register("priority", { required: true })}
                id="priority"
                className="select h-10 select-bordered w-full "
              >
                <option>Low</option>
                <option>Moderate</option>
                <option>High</option>
              </select>
            </div>
            {errors.priority?.type === "required" && (
              <span className="text-red-600">Task Priority is required</span>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#5F8670] py-3 rounded-md mx-auto w-full text-white font-bold"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
