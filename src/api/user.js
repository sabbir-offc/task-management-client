import axiosSecure from "."


//save a task in database
export const saveTask = async (taskInfo) => {
    const { data } = await axiosSecure.post('/task', taskInfo);
    return data;
}


//getting all task by user
export const getAllTasks = async (email) => {
    const { data } = await axiosSecure(`/tasks/${email}`);
    return data;
}