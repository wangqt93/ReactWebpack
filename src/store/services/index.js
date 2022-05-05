import axios from "axios";
// https://jsonplaceholder.typicode.com/todos
export const getUser = async () => {
    const res =  await axios.get("https://randomuser.me/api/")
    return (res.status === 200 && res.data) ? res.data : null
}

export const gettodos= async () => {
    const res =  await axios.get("https://jsonplaceholder.typicode.com/todos")
    return (res.status === 200 && res.data) ? res.data : null
}