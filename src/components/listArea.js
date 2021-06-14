import Todo from "./todo";
import { getTodos } from "../api/todos";
import React from "react";
// import { useEffect } from "react";

const ListArea = () => {
  getTodos();
  // console.log(todos);
  const todoList = [
    { title: "読書", description: "イシューから始めよ" },
    { title: "読書", description: "イシューから始めよ" },
    { title: "読書", description: "イシューから始めよ" },
    { title: "読書", description: "イシューから始めよ" },
  ];
  return (
    <div>
      {todoList.map((todo, id) => {
        return (
          <div key={id}>
            <Todo todoTitle={todo.title} todoDescription={todo.description} />
          </div>
        );
      })}
    </div>
  );
};
export default ListArea;
