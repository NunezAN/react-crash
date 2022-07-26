import "./TodoItem.css";

function TodoList(props) {
  let classCompleted = props.item.completed ? "completed" : "notCompleted";
  console.log(`${props.item.id}${classCompleted}`);
  return (
    <div>
        <div className="TodoItem">
          <input type="checkbox" id="checkbox" checked={props.item.completed}
          onChange={()=> props.handleChange(props.item.id)}/>
          <label className={`Todo__Label ${classCompleted}`} htmlFor="checkbox">{props.item.text}</label>
        </div>
    </div>
  );
}



export default TodoList;
