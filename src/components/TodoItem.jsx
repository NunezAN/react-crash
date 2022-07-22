import "./TodoItem.css";

function TodoList(props) {
  return (
    <div>
        <div className="TodoItem">
          <input type="checkbox" id="checkbox" checked={props.item.completed} onChange={()=> console.log("changed")}/>
          <label className="Todo__Labe" htmlFor="checkbox">{props.item.text}</label>
        </div>
    </div>
  );
}

export default TodoList;
