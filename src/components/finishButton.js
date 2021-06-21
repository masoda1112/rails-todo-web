import PropTypes from "prop-types";
import { finishTodo } from "../api/todos";

const FinishButton = ({ id }) => {
  console.log(id);
  const handleFinish = () => {
    finishTodo(id);
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
};

export default FinishButton;
