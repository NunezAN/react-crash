import TodoItem from "./components/TodoItem.jsx";
import "./App.css";
import todosData from "./components/todosData.js";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: todosData};

      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id){
    this.setState(prevState =>{
      const newState = prevState.data.map(obj => {
        if(obj.id == id){
          obj.completed = !obj.completed;
        }
        return obj;
      })
      return{data: newState};
    })
  }

  render() {
    const todosComponent = this.state.data.map((todoitem) => {
      return <TodoItem key={todoitem.id} item={todoitem} handleChange={this.handleChange}></TodoItem>;
    });
    return (
      <div className="container">
        <div className="TodoList--container">{todosComponent}</div>
      </div>
    );
  }

}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 1,
//     };
//     this.handleClick = this.handleClick.bind(this);
//     this.handleClick__half = this.handleClick__half.bind(this);
//   }

//   handleClick(){
//     this.setState(prevState=> {
//       return {
//         count : prevState.count *2
//       }
//     });
//   }

//   handleClick__half(){
//     this.setState(prevState=>{
//       return{
//         count: prevState.count / 2 
//       }
//     })
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleClick}>Change-double!</button>
//         <button onClick={this.handleClick__half}>Change!-half</button>
//       </div>
//     );
//   }
// }


export default App;
