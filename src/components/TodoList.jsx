import "./TodoList.css";

function TodoList() {
  const taskOne = "Wash Clothes";
  const taskTwo = "Finish React";
  const taskThree = "Drink Matcha";
  return (
    <div className="container">
      <div className="TodoList--container">
        <div className="TodoItem">
          <input type="checkbox" id="checkbox1" />
          <label className="Todo__Label" htmlFor="checkbox1">{`${taskOne}`}</label>
        </div>
        <div className="TodoItem">
          <input type="checkbox" id="checkbox2" />
          <label className="Todo__Label" htmlFor="checkbox2">{`${taskTwo}`}</label>
        </div>
        <div className="TodoItem">
          <input type="checkbox" id="checkbox3" />
          <label className="Todo__Label" htmlFor="checkbox3">{`${taskThree}`}</label>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
