import SearchArea from "../components/searchArea";
import ListArea from "../components/listArea";
import { useEffect, useState } from "react";
import { getTodos } from "../api/todos";

const ListPage = () => {
  const [todoList, setTodoList] = useState([]);
  useEffect(async () => {
    setTodoList(getTodos());
  }, []);

  // const todoList = [
  //   { title: "読書", description: "イシューから始めよ" },
  //   { title: "読書", description: "イシューから始めよ" },
  //   { title: "読書", description: "イシューから始めよ" },
  //   { title: "読書", description: "イシューから始めよ" },
  // ];
  return (
    <>
      <SearchArea />
      <ListArea todoList={todoList} />
    </>
  );
};
export default ListPage;
