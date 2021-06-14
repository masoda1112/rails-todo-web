import { Input, Button } from "@material-ui/core";
import { useState } from "react";

const SearchArea = () => {
  const [searchQuery, setSearchQuery] = useState();
  const handleSubmit = () => {
    console.log(searchQuery);
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
