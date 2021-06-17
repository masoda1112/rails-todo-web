import SearchArea from "../components/searchArea";
import ListArea from "../components/listArea";
import { useEffect, useState } from "react";
import { getTodos } from "../api/todos";

const ListPage = () => {
  const [todoList, setTodoList] = useState([]);
  console.log(todoList);

  useEffect(async () => {
    setTodoList(await getTodos());
  }, []);

  return (
    <>
      <SearchArea />
      <ListArea todoList={todoList} />
    </>
  );
};
export default ListPage;
