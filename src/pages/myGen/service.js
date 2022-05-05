import axios from "axios";

export const getPosts = async () => {
  const result = await  axios.get('https://jsonplaceholder.typicode.com/posts')
   return (result.status &&result.data.length>0) ? result.data : []

}

export const getUsers = async () => {
  const result =  await axios.get('https://jsonplaceholder.typicode.com/users')
  return (result.status &&result.data.length>0) ? result.data : []

}