import SearchArea from "../components/searchArea";
import ListArea from "../components/listArea";
import { useEffect, useState } from "react";
import { getTodos, searchTodos } from "../api/todos";
import { Link } from "react-router-dom";

const ListPage = () => {
  // 2handleTodoListが走るとこれが更新される→再レンダリングされリセットん？違くね？だって、useState更新されても毎回レンダリングされないでしょ？
  const [todoList, setTodoList] = useState([]);

  // 1検索押すとこれが走る 4useEffectに呼び出されてこれが走る（searchQueryは空）
  const handleTodoList = async (e, searchQuery) => {
    // e.preventDefault();
    setTodoList(await searchTodos(searchQuery));
  };

  // 3再レンダリングされるとこれが走る
  useEffect(async () => {
    console.log("レンダリング");
    setTodoList(await getTodos());
  }, []);
  console.log("todolist", todoList);
  return (
    <>
      <SearchArea handleTodoList={handleTodoList} />
      <ListArea todoList={todoList} />
      <Link to="/create">TODO登録</Link>
    </>
  );
};
export default ListPage;
