import { FiEdit, FiTrash2 } from "react-icons/fi";
import "./SingleItem.css";

const SingleItem = ({ item, editCompleted }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editCompleted(item.id)}
      />
      <p className={item.completed ? "completed" : ""}>{item.name}</p>

      <button
        className="btn icon-btn edit-btn"
        type="button"
        onClick={() => null}
      >
        <i className="fa-solid fa-pen"></i>
      </button>

      <button
        className="btn icon-btn remove-btn"
        type="button"
        onClick={() => null}
      >
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};

export default SingleItem;
