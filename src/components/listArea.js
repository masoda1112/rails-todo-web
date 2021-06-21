import React from "react";
import PropTypes from "prop-types";
import Todo from "./todo";

const ListArea = ({ todoList, title }) => {
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
            />
          </div>
        );
      })}
    </div>
  );
};

ListArea.propTypes = {
  todoList: PropTypes.array,
  title: PropTypes.string,
};

export default ListArea;
