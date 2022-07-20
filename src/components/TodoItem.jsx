import "./TodoItem.css";

function TodoList() {
  const taskOne = "Place Holder Text Here";

  return (
    // <div className="container">
    //   <div className="TodoList--container">
    <div>
        <div className="TodoItem">
          <input type="checkbox" id="checkbox" />
          <label className="Todo__Labe" htmlFor="checkbox">{`${taskOne}`}</label>
        </div>
    </div>
    //   </div>
    // </div>
  );
}

export default TodoList;
