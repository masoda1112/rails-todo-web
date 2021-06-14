import PropTypes from "prop-types";

const Todo = ({ todoTitle, todoDescription }) => {
  const tags = ["w", "d"];
  return (
    <>
      <div className="todo">
        <p className="todo-title todo-item">{todoTitle}</p>
        <p className="todo-description todo-item">{todoDescription}</p>
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
        <div className="delete-button-area">
          <p className="delete-button">削除</p>
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
  todoTitle: PropTypes.string,
  todoDescription: PropTypes.string,
};

export default Todo;
