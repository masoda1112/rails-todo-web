import { Input, Button } from "@material-ui/core";
import { useState } from "react";
import { searchTodos } from "../api/todos";

const SearchArea = () => {
  // ここでapiを呼び出す（get）
  const [searchQuery, setSearchQuery] = useState();
  const handleSubmit = async () => {
    searchTodos(await searchQuery);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input onChange={(event) => setSearchQuery(event.target.value)}>
          {searchQuery}
        </Input>
        <Button type="submit" value="sabmit">
          検索
        </Button>
      </form>
    </div>
  );
};
export default SearchArea;
