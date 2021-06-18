import axios from "axios";

const getTodos = () => {
  const res = axios.get(`http://localhost:3001/todos`).then((res) => res.data);
  return res;
};

const searchTodos = (name) => {
  const res = axios
    .get(`http://localhost:3001/todos/search/${name}`)
    .then((res) => res.data);
  console.log(res);
  return res;
};

const createTodo = (todoName, tagList) => {
  const params = {
    name: todoName,
    tags_id: tagList,
  };
  return axios.post(`http://localhost:3001/todos`, params);
};

const deleteTodo = (tagId) => {
  return axios.delete(`http://localhost:3001/todos/${tagId}`);
};

export { getTodos, searchTodos, createTodo, deleteTodo };
