import TodoItem from "./components/TodoItem.jsx";
import "./App.css";
import todosData from "./components/todosData.js";
import React from "react";
import Conditional from "./components/conditional.jsx";

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

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoading:true
//     };
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         isLoading: false,
//       });
//     }, 1508);
//   }

//   render() {
//     return (
//       <div>
//         <Conditional isLoading={this.state.isLoading} />
//       </div>
//     );
//   }
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true,
    };

    this.logClick = this.logClick.bind(this);
  }

  logClick() {
    this.setState(prevState=>{
      return {loggedIn: !prevState.loggedIn}
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.loggedIn ? "Logged In" : "Logged Out"}</div>
        <button onClick={this.logClick}>
          {this.state.loggedIn ? "Log Out" : "log In"}
        </button>
      </div>
    );
  }
}
export default App;
