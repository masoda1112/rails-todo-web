import axios from "axios";
import tagsJson from "../stub/tags.json";
import todoTagsJson from "../stub/todoTags.json";

const getTags = (todo_id) => {
  // return axios
  //   .get(`localhost:3001/todo_tag/get/${todo_id}`)
  //   .then((res) => res.data);

  //propに渡されたtodo_idを持つtodoTagsデータにフィルタリング
  const todoTags = todoTagsJson.todo_tag.filter(
    (todoTag) => todoTag.todo_id == todo_id
  );
  const todoTagList = [];

  // フィルタリングしたtodoTagsデータのtag_idでtagsデータを検索し、該当するtagをtodoTagListにpush
  // これrailsでやるからいらんかもな
  todoTags.map((todoTag) => {
    tagsJson.tags.map((tag) => {
      if (tag.id == todoTag.tag_id) {
        todoTagList.push(tag);
      }
    });
  });
  return todoTagList;
};

const addTags = (todo_id, tag_id) => {
  return axios.post(`localhost:3001/todo_tag/add/${todo_id}/${tag_id}`);
};

export { getTags, addTags };
