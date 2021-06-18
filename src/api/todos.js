import axios from "axios";

const apiUrl =
  process.env.NODE_ENV == "production"
    ? process.env.REACT_APP_PROD_API_URL
    : process.env.REACT_APP_DEV_API_URL;

const getTodos = () => {
  const res = axios.get(`${apiUrl}/todos`).then((res) => res.data);
  return res;
};

const searchTodos = (name) => {
  const res = axios
    .get(`${apiUrl}/todos/search/${name}`)
    .then((res) => res.data);
  console.log(res);
  return res;
};

const createTodo = (todoName, tagList) => {
  const params = {
    name: todoName,
    tags_id: tagList,
  };
  return axios.post(`${apiUrl}/todos`, params);
};

const deleteTodo = (tagId) => {
  return axios.delete(`${apiUrl}/todos/${tagId}`);
};

export { getTodos, searchTodos, createTodo, deleteTodo };
