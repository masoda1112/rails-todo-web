import React from "react";
import PropTypes from "prop-types";
import Todo from "./todo";

const ListArea = ({
  todoList,
  setTodoList,
  title,
  setFinishedModalStatus,
  setFinishedTodo,
  finishedTodoList,
  setFinishedTodoList,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      {todoList.map((todo, id) => {
        return (
          <div key={id}>
            <Todo
              id={todo.id}
              name={todo.name}
              tags={todo.label}
              isFinished={todo.is_finished}
              expiration_message={todo.expiration_message}
              setFinishedModalStatus={setFinishedModalStatus}
              setFinishedTodo={setFinishedTodo}
              todoList={todoList}
              setTodoList={setTodoList}
              finishedTodoList={finishedTodoList}
              setFinishedTodoList={setFinishedTodoList}
            />
          </div>
        );
      })}
    </div>
  );
};

ListArea.propTypes = {
  todoList: PropTypes.array,
  setTodoList: PropTypes.array,
  title: PropTypes.string,
  setFinishedModalStatus: PropTypes.boolean,
  setFinishedTodo: PropTypes.array,
  finishedTodoList: PropTypes.array,
  setFinishedTodoList: PropTypes.array,
};

export default ListArea;
