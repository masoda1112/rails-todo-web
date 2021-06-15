import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getTags } from "../api/todoTag";

const Todo = ({ name, id }) => {
  // apiでtagsをgetする
  const [tags, setTagsId] = useState([]);
  useEffect(async () => {
    setTagsId(getTags(id));
  }, []);

  return (
    <>
      <div className="todo">
        <p className="todo-title todo-item">{name}</p>
        <div className="tags-area">
          <div className="tags-list">
            {tags.map((tag, id) => {
              return (
                <p className="tag" key={id}>
                  {tag.label}
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
  name: PropTypes.string,
  id: PropTypes.number,
};

export default Todo;
