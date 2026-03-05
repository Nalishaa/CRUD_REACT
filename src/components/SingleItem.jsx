import "./SingleItem.css";

const SingleItem = ({ item, editCompleted, removeItem, setEditId }) => {
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
        onClick={() => setEditId(item.id)}
      >
        <i className="fa-solid fa-pen"></i>
      </button>

      <button
        className="btn icon-btn remove-btn"
        type="button"
        onClick={() => removeItem(item.id)}
      >
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};

export default SingleItem;
