import TodoItem from "./components/TodoItem.jsx";
import "./App.css"
import todosData from "./components/todosData.js";
function App() {
  const todosComponent = todosData.map((todoitem) =>{
    return <TodoItem key={todoitem.id} item = {todoitem}></TodoItem>  
  })

  return (
    <div className="container">
        <div className="TodoList--container">
          {todosComponent}  
        </div>
    </div>
  );
}

export default App;
