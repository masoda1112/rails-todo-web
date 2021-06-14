import { TextField, Select, MenuItem, Button } from "@material-ui/core";
import { useState } from "react";

const CreateForm = () => {
  // ここでapiを呼び出す（create）
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");

  const createTodo = () => {
    console.log(title, description, tag);
    setTitle("");
    setDescription("");
    setTag("");
  };

  return (
    <>
      <form onSubmit={createTodo}>
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
        <Select id="select" fullWidth>
          <MenuItem value="work">work</MenuItem>
          <MenuItem value="private">private</MenuItem>
          <MenuItem value="dev">dev</MenuItem>
          <MenuItem value="input">input</MenuItem>
        </Select>
        <Button fullWidth type="submit" value="sabmit">
          登録
        </Button>
      </form>
    </>
  );
};
export default CreateForm;
