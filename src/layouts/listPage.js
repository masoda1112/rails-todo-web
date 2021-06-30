import SearchArea from "../components/searchArea";
import ListArea from "../components/listArea";
import { useEffect, useState } from "react";
import { getTodos, searchTodos } from "../api/todos";
import { Link } from "react-router-dom";

import Header from "../components/header.js";

const ListPage = () => {
  // 2handleTodoListが走るとこれが更新される→再レンダリングされリセットん？違くね？だって、useState更新されても毎回レンダリングされないでしょ？
  const [todoList, setTodoList] = useState([]);
  const [finishedTodoList, setFinishedTodoList] = useState([]);
  const [finishedModalStatus, setFinishedModalStatus] = useState(false);
  const [finishedTodo, setFinishedTodo] = useState();
  const todoListTitle = "todoリスト";
  const finishedTodoListTitle = "完了したtodo";

  // 1検索押すとこれが走る 4useEffectに呼び出されてこれが走る（searchQueryは空）
  const handleTodoList = async (e, searchQuery) => {
    e.preventDefault();
    await searchTodos(searchQuery).then((res) => {
      setTodoList(res);
    });
  };

  // 3再レンダリングされるとこれが走る
  useEffect(async () => {
    const res = await getTodos();
    console.log(res);
    const resFinihsedList = [];
    const resTodoList = [];
    res.map((t) => {
      if (t.is_finished == true) {
        resFinihsedList.push(t);
      } else if (t.is_finished == false) {
        resTodoList.push(t);
      }
    });
    setFinishedTodoList(resFinihsedList);
    setTodoList(resTodoList);
    console.log(todoList);
  }, []);
  return (
    <>
      <header>
        <Header />
      </header>
      <div className={finishedModalStatus ? "show" : "hide"}>
        {finishedTodo}を完了しました！
      </div>
      <SearchArea handleTodoList={handleTodoList} />
      <ListArea
        todoList={todoList}
        setTodoList={setTodoList}
        title={todoListTitle}
        setFinishedModalStatus={setFinishedModalStatus}
        setFinishedTodo={setFinishedTodo}
        finishedTodoList={finishedTodoList}
        setFinishedTodoList={setFinishedTodoList}
      />
      <ListArea todoList={finishedTodoList} title={finishedTodoListTitle} />
      <Link to="/create">TODO登録</Link>
      <style jsx>
        {`
          .hide {
            display: none;
          }
          .show {
            display: block;
          }
        `}
      </style>
    </>
  );
};
export default ListPage;
