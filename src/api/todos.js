import axios from "axios";
import todosJson from "../stub/todos.json";

const getTodos = () => {
  // return axios.get(`localhost:3001/todo/get/`);
  return todosJson.todos;
};

const searchTodos = (text) => {
  // return axios.get(`localhost:3001/todo/search/${text}/`);
  return todosJson.todos.filter((todo) => todo.name == text);
};

const createTodo = (title, description) => {
  return axios.post(`localhost:3001/todo/post/${title}/${description}/`);
};

const deleteTodo = (id) => {
  return axios.post(`localhost:3001/todo/delete/${id}/`);
};

export { getTodos, searchTodos, createTodo, deleteTodo };
