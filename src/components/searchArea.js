import { Input, Button } from "@material-ui/core";
import { useState } from "react";
import { searchTodos } from "../api/todos";

const SearchArea = () => {
  // ここでapiを呼び出す（get）
  const [searchQuery, setSearchQuery] = useState();
  const handleSubmit = () => {
    searchTodos(searchQuery);
    setSearchQuery("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input onChange={(e) => setSearchQuery(e)}>{searchQuery}</Input>
        <Button type="submit" value="sabmit">
          検索
        </Button>
      </form>
    </div>
  );
};
export default SearchArea;
