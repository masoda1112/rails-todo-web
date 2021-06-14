import axios from "axios";

const getTodos = () => {
  return axios.get(`localhost:3001/todo/get/`);
};

const searchTodos = (text) => {
  return axios.get(`localhost:3001/todo/search/${text}/`);
};

const createTodo = (title, description) => {
  return axios.post(`localhost:3001/todo/post/${title}/${description}/`);
};

const deleteTodo = (id) => {
  return axios.post(`localhost:3001/todo/delete/${id}/`);
};

export { getTodos, searchTodos, createTodo, deleteTodo };
