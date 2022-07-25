import TodoItem from "./components/TodoItem.jsx";
import "./App.css";
import todosData from "./components/todosData.js";
import React from "react";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       data: todosData};

//       this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(id){
//     this.setState(prevState =>{
//       const newState = prevState.data.map(obj => {
//         if(obj.id == id){
//           obj.completed = !obj.completed;
//         }
//         return obj;
//       })
//       return{data: newState};
//     })
//   }

//   render() {
//     const todosComponent = this.state.data.map((todoitem) => {
//       return <TodoItem key={todoitem.id} item={todoitem} handleChange={this.handleChange}></TodoItem>;
//     });
//     return (
//       <div className="container">
//         <div className="TodoList--container">{todosComponent}</div>
//       </div>
//     );
//   }

// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount(){

  }

  componentWillReceiveProps(){

  }

  shouldComponentUpdate(nextProps, nextState){
    //return true if want to update
    //return false if not
  }

  componentWillUnmount(){
    //teardown or cleanup before your component dissappears
    //remove event listeners
  }

  render() {
    return <div>Code goes here</div>;
  }
}

export default App;
