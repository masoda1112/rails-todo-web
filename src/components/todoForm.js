import { TextField, Button } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useState } from "react";
import { createTodo } from "../api/todos";
// import { addTags } from "../api/todoTag";

const CreateForm = () => {
  // ここでapiを呼び出す（create）
  const [name, setName] = useState("");
  const [tags, setTags] = useState([]);

  const tagList = [
    { name: "work", id: 0 },
    { name: "private", id: 1 },
    { name: "dev", id: 2 },
    { name: "input", id: 3 },
  ];

  const handleCreateTodo = () => {
    //データベースにtodoを投稿し、返答をtodoに格納する
    createTodo(name, tags);
    //addTodoTagsにtodoのidを渡す
  };

  return (
    <>
      <form onSubmit={handleCreateTodo}>
        <TextField
          id="name"
          label="name"
          variant="outlined"
          fullWidth
          onChange={(value) => setName(value)}
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
              onChange={(value) =>
                setTags([...tags, { name: value.name, id: value.id }])
              }
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
