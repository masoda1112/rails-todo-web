import { TextField, Button } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useState } from "react";
import { createTodo } from "../api/todos";
// import { addTags } from "../api/todoTag";

const CreateForm = () => {
  // ここでapiを呼び出す（create）
  const [todoName, setTodoName] = useState();
  const [tags, setTags] = useState([]);

  const tagList = [
    { name: "work", id: 1 },
    { name: "private", id: 2 },
    { name: "dev", id: 3 },
    { name: "input", id: 4 },
  ];

  const handleNameChange = (value) => {
    setTodoName(value);
  };

  const handleTagChange = (value) => {
    const tags_id = [];
    value.map((v) => {
      tags_id.push(v.id);
    });
    setTags(tags_id);
  };
  const handleCreateTodo = (e) => {
    e.preventDefault();
    //データベースにtodoを投稿し、返答をtodoに格納する
    createTodo(todoName, tags);
  };

  return (
    <>
      <form onSubmit={handleCreateTodo}>
        <TextField
          id="name"
          label="name"
          variant="outlined"
          fullWidth
          onChange={(event) => handleNameChange(event.target.value)}
        />
        <Autocomplete
          multiple
          id="tags-standard"
          options={tagList}
          getOptionLabel={(option) => option.name}
          onChange={(e, value) => {
            handleTagChange(value);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="tags"
              placeholder="タグを追加"
              value={params.id}
              // onChange={(value) => handleTagChange(value)}
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
