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

//update a single task info 
export const updateSingleTask = async (task, id) => {
    const { data } = await axiosSecure.put(`/update-task/${id}`, task);
    return data;
}

//get a single task info 
export const getSingleTask = async (id) => {
    const { data } = await axiosSecure(`/task/${id}`);
    return data;
}

//delete a task 
export const deleteTask = async (id) => {
    const { data } = await axiosSecure.delete(`/deleteTask/${id}`);
    return data;
}


//update task status = 
export const updateTaskStatus = async (id, status) => {
    const { data } = await axiosSecure.patch(`/status/${id}`, { status });
    return data;
}


//save notifications 
export const saveNotifications = async (notification) => {
    const { data } = await axiosSecure.put(`/notification/${notification?.taskId}`, notification);
    return data;
}


//get notifations 
export const getNotifications = async (email) => {
    const { data } = await axiosSecure(`/notifications/${email}`);
    return data;
}

//delete a notification 
export const deleteNotification = async (id) => {
    const { data } = await axiosSecure.delete(`/deleteNotification/${id}`)
    return data;
}


//get single user data
export const getProfileData = async (email) => {
    const { data } = await axiosSecure(`/user/${email}`);
    return data;
}