import "./TodoItem.css";

function TodoList(props) {
  return (
    <div>
        <div className="TodoItem">
          <input type="checkbox" id="checkbox" checked={props.item.completed} onChange={()=> props.handleChange(props.item.id)}/>
          <label className="Todo__Label" htmlFor="checkbox">{props.item.text}</label>
        </div>
    </div>
  );
}

export default TodoList;
