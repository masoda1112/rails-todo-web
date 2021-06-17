import SearchArea from "../components/searchArea";
import ListArea from "../components/listArea";
import { useEffect, useState } from "react";
import { getTodos } from "../api/todos";

const ListPage = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(async () => {
    setTodoList(getTodos());
  }, []);

  return (
    <>
      <SearchArea />
      <ListArea todoList={todoList} />
    </>
  );
};
export default ListPage;
