import TodoItem from "./components/TodoItem.jsx";
import "./App.css";
import todosData from "./components/todosData.js";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = todosData;
  }

  render() {
    const todosComponent = this.state.map((todoitem) => {
      return <TodoItem key={todoitem.id} item={todoitem}></TodoItem>;
    });
    console.log(this.state);
    return (
      <div className="container">
        <div className="TodoList--container">{todosComponent}</div>
      </div>
    );
  }
}


export default App;
