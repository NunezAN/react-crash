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

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      answer:"Yes"
    };
  }

  render() {
    return (
      <div>
        <Header username={this.state.answer}></Header>
        <Greeting></Greeting>
      </div>
    );
  }
}
//#2
class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Welcome,{this.props.username}</p>
      </header>
    );
  }
}
// function Header(props) {
//   console.log(props.username);
//   return (
//     <header>
//       <p>Welcome,{props.username}</p>
//     </header>
//   );
// }
//#3
// function Greeting() {
//   const date = new Date();
//   const hours = date.getHours();
//   let timeOfDay;
//   if (hours < 12) {
//     timeOfDay = "morning";
//   } else if (hours >= 12 && hours < 17) {
//     timeOfDay = "afternoon";
//   } else {
//     timeOfDay = "night";
//   }

//   return <h1>Good {timeOfDay} to you, sir ir madem!</h1>;
// }
class Greeting extends React.Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    if (hours < 12) {
      timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon";
    } else {
      timeOfDay = "night";
    }

    return <h1>Good {timeOfDay} to you, sir ir madem!</h1>;
  }
}

export default App;
