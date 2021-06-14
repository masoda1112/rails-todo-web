import { TextField, Button } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useState } from "react";
import { createTodo } from "../api/todos";
import addTags from "../api/todoTag";

const CreateForm = () => {
  // ここでapiを呼び出す（create）
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);

  const tagList = [
    { name: "work", id: 0 },
    { name: "private", id: 1 },
    { name: "dev", id: 2 },
    { name: "input", id: 3 },
  ];

  const handleCreateTodo = () => {
    //データベースにtodoを投稿し、返答をtodoに格納する
    const todo = createTodo(title, description);
    //addTodoTagsにtodoのidを渡す
    addTodoTags(todo.id);
  };

  const addTodoTags = (id) => {
    tags.map((tag) => {
      //addTagsを繰り返し処理、todoのidを渡さないといけない
      addTags(id, tag);
    });
  };
  return (
    <>
      <form onSubmit={handleCreateTodo}>
        <TextField
          id="title"
          label="title"
          variant="outlined"
          fullWidth
          onChange={(e) => setTitle(e)}
        />
        <TextField
          id="description"
          label="description"
          variant="outlined"
          fullWidth
          onChange={(e) => setDescription(e)}
        />
        <Autocomplete
          multiple
          id="tags-standard"
          options={tagList}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="tags"
              placeholder="タグを追加"
              onChange={(e) => setTags([...tags, { name: e.name, id: e.id }])}
            />
          )}
          fullWidth
        />
        <Button fullWidth type="submit" value="sabmit">
          登録
        </Button>
      </form>
    </>
  );
};
export default CreateForm;
