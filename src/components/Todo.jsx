function Todo({ task, togglePopup }) {
  return (
    <div className="todo-item">
      <h2>{task}</h2>
      <p></p>
      <button onClick={togglePopup}>Delete</button>
    </div>
  );
}

export default Todo;
