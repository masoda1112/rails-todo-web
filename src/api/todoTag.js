import axios from "axios";

const getTags = (todo_id) => {
  axios.get(`localhost:3001/todo_tag/get/${todo_id}`).then((res) => res.data);
};

const addTags = (todo_id, tag_id) => {
  axios.post(`localhost:3001/todo_tag/add/${todo_id}/${tag_id}`);
};

export default { getTags, addTags };
