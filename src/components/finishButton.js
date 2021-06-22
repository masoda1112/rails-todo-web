import PropTypes from "prop-types";
import { finishTodo } from "../api/todos";

const FinishButton = ({
  id,
  name,
  setFinishedModalStatus,
  setFinishedTodo,
  setTodoList,
  todoList,
  finishedTodoList,
  setFinishedTodoList,
}) => {
  const handleFinish = () => {
    finishTodo(id);
    setFinishedModalStatus(true);
    setFinishedTodo(name);
    const finishedTodo = todoList.find((todo) => todo.id == id);
    finishedTodo.is_finished = true;
    const newTodoList = todoList.filter((t) => t.id != id);
    console.log(newTodoList);
    console.log(finishedTodo);
    setFinishedTodoList([...finishedTodoList, finishedTodo]);
    setTodoList(newTodoList);
    setTimeout(handleSetFinishedModalStatus, 5000);
  };
  const handleSetFinishedModalStatus = () => {
    setFinishedModalStatus(false);
  };
  return (
    <p
      className="finish-button"
      onClick={() => {
        handleFinish();
      }}
    >
      完了
    </p>
  );
};

FinishButton.propTypes = {
  id: PropTypes.integer,
  setFinishedModalStatus: PropTypes.boolean,
  name: PropTypes.string,
  setFinishedTodo: PropTypes.string,
  setTodoList: PropTypes.array,
  todoList: PropTypes.array,
  finishedTodoList: PropTypes.array,
  setFinishedTodoList: PropTypes.array,
};

export default FinishButton;
