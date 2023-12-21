import axiosSecure from "."
//save user in db
export const saveUser = async (userInfo) => {
    const { data } = await axiosSecure.put(`/users/${userInfo?.email}`, userInfo);
    return data;
}
export const getToken = async (email) => {
    const { data } = await axiosSecure.post(`/jwt`, { email })
    console.log('Token received from server------>', data)
    return data
}
export const clearCookie = async () => {
    const { data } = await axiosSecure.get('/logout')
    return data
}