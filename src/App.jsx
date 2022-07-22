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
    this.obj = {
      name: "Alex",
      age: 26,
    };
  }
  
  render() {
    console.log(this.obj.age);
    return (
      <div>
        <h1>{this.obj.name}</h1>
        <h3>{this.obj.age} years old</h3>
      </div>
    );
  }
}
export default App;
