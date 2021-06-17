import axios from "axios";

const getTodos = () => {
  const res = axios.get(`http://localhost:3001/todos`).then((res) => res.data);
  console.log(res);
  return res;
};

const searchTodos = (text) => {
  return axios.get(`http://localhost:3001/todos/search/${text}`);
};

const createTodo = (tagName, tagList) => {
  const params = {
    name: tagName,
    tags: tagList,
  };
  return axios.post(`http://localhost:3001/todos/post`, params);
};

const deleteTodo = (tagId) => {
  const params = {
    id: tagId,
  };
  return axios.delete(`http://localhost:3001/todos/`, params);
};

export { getTodos, searchTodos, createTodo, deleteTodo };
