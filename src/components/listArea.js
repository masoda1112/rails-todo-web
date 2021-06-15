import React from "react";
import PropTypes from "prop-types";
import Todo from "./todo";

const ListArea = ({ todoList }) => {
  return (
    <div>
      {todoList.map((todo, id) => {
        return (
          <div key={id}>
            <Todo name={todo.name} id={todo.id} />
          </div>
        );
      })}
    </div>
  );
};

ListArea.propTypes = {
  todoList: PropTypes.array,
};

export default ListArea;
