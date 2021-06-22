import { TextField, Button } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useState } from "react";
import { createTodo } from "../api/todos";
import { Link, useHistory } from "react-router-dom";
// import { addTags } from "../api/todoTag";

const CreateForm = () => {
  // ここでapiを呼び出す（create）
  const [todoName, setTodoName] = useState();
  const [tags, setTags] = useState([]);
  const [expirationTime, setExpirationTime] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [isError, setIsError] = useState(false);
  const [apiResponse, setApiResponse] = useState([]);

  const history = useHistory();

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
    const tags_id = value.map((v) => {
      v.id;
    });
    setTags(tags_id);
  };

  const handleTimeChange = (value) => {
    setExpirationTime(value);
  };

  const handleCreateTodo = async (e) => {
    e.preventDefault();
    setApiResponse(await createTodo(todoName, tags, expirationTime));
    if (apiResponse.status) {
      setIsError(false);
      history.push("/");
    } else {
      setErrorMessage(apiResponse.error_message);
      setIsError(true);
    }
  };

  return (
    <>
      <div>
        {isError && <p className="error-message">{errorMessage}</p>}
        <TextField
          id="name"
          label="name"
          variant="outlined"
          fullWidth
          onChange={(event) => handleNameChange(event.target.value)}
        />
        <TextField
          id="datetime-local"
          label="expiration_time"
          type="datetime-local"
          defaultValue="2020-06-22T10:30"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(event) => handleTimeChange(event.target.value)}
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
        <Button
          fullWidth
          type="submit"
          value="sabmit"
          disabled={todoName == null ? true : false}
          onClick={handleCreateTodo}
        >
          登録
        </Button>
        <Link to="/">TODO一覧</Link>
      </div>
      <style jsx>
        {`
          .error-message {
            background-color: red;
          }
        `}
      </style>
    </>
  );
};
export default CreateForm;
