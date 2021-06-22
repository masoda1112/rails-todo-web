import PropTypes from "prop-types";
import { deleteTodo } from "../api/todos";
import FinishButton from "./finishButton.js";
import ExpirationMessage from "./expirationMessage";

const Todo = ({
  id,
  name,
  tags,
  isFinished,
  expiration_message,
  setFinishedModalStatus,
  setFinishedTodo,
  todoList,
  setTodoList,
  finishedTodoList,
  setFinishedTodoList,
}) => {
  const handleDestroy = async () => {
    await deleteTodo(id);
    // todoListからidに該当するものを消す（setTodoList的な）
    location.reload();
  };

  return (
    <>
      <div className="todo">
        <p className="todo-title todo-item">{name}</p>
        <div className="tags-area">
          <div className="tags-list">
            {tags.map((tag, id) => {
              return (
                <p className="tag" key={id}>
                  {tag}
                </p>
              );
            })}
          </div>
        </div>
        {!isFinished && (
          <FinishButton
            id={id}
            name={name}
            setFinishedModalStatus={setFinishedModalStatus}
            setFinishedTodo={setFinishedTodo}
            todoList={todoList}
            setTodoList={setTodoList}
            finishedTodoList={finishedTodoList}
            setFinishedTodoList={setFinishedTodoList}
          />
        )}
        {!isFinished && (
          <ExpirationMessage expiration_message={expiration_message} />
        )}
        <div className="delete-button-area">
          <p
            className="delete-button"
            onClick={() => {
              handleDestroy();
            }}
          >
            削除
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .todo {
            margin-top: 30px !important;
            margin: 0 auto;
            display: flex;
            justify-content: space-evenly;
          }
          .todo-item {
            margin-top: 0px;
            margin-bottom: 0px;
          }
          .todo-title {
            font-weight: bold;
          }
          .tags-list {
            display: flex;
            justify-content: space-between;
          }
          .tag {
            margin-top: 0;
          }
          .delete-button {
            margin-top: 0;
          }
          .tag .todo-desccription {
          }
        `}
      </style>
    </>
  );
};

Todo.propTypes = {
  id: PropTypes.integer,
  name: PropTypes.string,
  tags: PropTypes.array,
  isFinished: PropTypes.boolean,
  expiration_message: PropTypes.string,
  setFinishedModalStatus: PropTypes.boolean,
  setFinishedTodo: PropTypes.name,
  todoList: PropTypes.array,
  setTodoList: PropTypes.array,
  finishedTodoList: PropTypes.array,
  setFinishedTodoList: PropTypes.array,
};

export default Todo;
