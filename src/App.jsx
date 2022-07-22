import TodoItem from "./components/TodoItem.jsx";
import "./App.css";
import todosData from "./components/todosData.js";
import React from "react";
// function App() {
//   // const todosComponent = todosData.map((todoitem) =>{
//   //   return <TodoItem key={todoitem.id} item = {todoitem}></TodoItem>
//   // })

//   return (
//     <div className="container">
//         {/* <div className="TodoList--container">
//           {todosComponent}
//         </div> */}
//         <h1>Code goes here</h1>
//     </div>
//   );
// }

//#1
// function App(){
//   return(
//        <div>
//             <Header username="Alex"/>
//             {/* <Greeting/> */}
//        </div>
//   )
// }

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       answer: "Yes",
//     };
//   }

//   render() {
//     return (
//       <div>
//         hello
//       </div>
//     );
//   }
// }

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    let word = this.state.isLoggedIn ? "in" : "out"
    return (
      <div>
        <h1>You are currently logged {word}</h1>
      </div>
    );
  }
}
export default App;
