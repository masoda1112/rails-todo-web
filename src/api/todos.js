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

const createTodo = (todoName, tagList, expiration_time) => {
  const params = {
    name: todoName,
    tags_id: tagList,
    expiration_time: expiration_time,
  };
  return axios.post(`${apiUrl}/todos`, params);
};

const deleteTodo = (id) => {
  return axios.delete(`${apiUrl}/todos/${id}`);
};

const finishTodo = (id) => {
  const params = {
    is_finished: true,
  };
  return axios.put(`${apiUrl}/todos/${id}`, params);
};

export { getTodos, searchTodos, createTodo, deleteTodo, finishTodo };
