import { Input, Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { useState } from "react";

const SearchArea = ({ handleTodoList }) => {
  const [searchQuery, setSearchQuery] = useState();
  return (
    <div>
      <div>
        <Input onChange={(event) => setSearchQuery(event.target.value)}>
          {searchQuery}
        </Input>
        <Button
          onClick={(e) => handleTodoList(e, searchQuery)}
          type="submit"
          value="sabmit"
        >
          検索
        </Button>
      </div>
    </div>
  );
};

SearchArea.propTypes = {
  handleTodoList: PropTypes.func,
};

export default SearchArea;
