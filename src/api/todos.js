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

const createTodo = (tagName, tagList) => {
  return axios.post(`localhost:3001/todo/post`, {
    name: tagName,
    tags: tagList,
  });
};

const deleteTodo = (tagId) => {
  return axios.post(`localhost:3001/todo/delete`, {
    id: tagId,
  });
};

export { getTodos, searchTodos, createTodo, deleteTodo };
