import TodoItem from "./components/TodoItem.jsx";
import "./App.css"
function App() {
  return (
    <div className="container">
        <div className="TodoList--container">
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
        </div>
    </div>
  );
}

export default App;
