import TodoItem from "./components/TodoItem.jsx";
import "./App.css";
import todosData from "./components/todosData.js";
import React from "react";
import Conditional from "./components/conditional.jsx";
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers.js";
import Form from "./components/form.jsx";
import Header from "./components/Header.jsx"
import MemeGenerator from "./components/MemeGenerator.jsx";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       data: todosData
//     };
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

//-----------Forms--------------------------------
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       firstName: "",
//       lastName: "",
//       isFriendly: true,
//       gender:"male",
//       favColor:"BLUE",
//     };

//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(event) {
//     event.target.type === "checkbox"
//       ? this.setState({
//           [event.target.name]: !this.state.isFriendly,
//         })
//       : this.setState({
//           [event.target.name]: event.target.value,
//         });
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           value={this.state.firstName}
//           name="firstName"
//           placeholder="First name"
//           onChange={this.handleChange}
//         />
//         <h1>{this.state.firstName}</h1>
//         <input
//           type="text"
//           value={this.state.lastName}
//           name="lastName"
//           placeholder="Last name"
//           onChange={this.handleChange}
//         />
//         <h1>{this.state.lastName}</h1>

//         <input
//           type="checkbox"
//           name="isFriendly"
//           checked={this.state.isFriendly}
//           onChange={this.handleChange}
//         />

//         <input
//           type="radio"
//           name="gender"
//           value="male"
//           checked={this.state.gender ==="male"}
//           onChange={this.handleChange}
//         />
//          <input
//           type="radio"
//           name="gender"
//           value="female"
//           checked={this.state.gender ==="female"}
//           onChange={this.handleChange}
//         />
//         <h2>{this.state.isFriendly? "FRIENDLY" : "NOT FRIENDLY"}</h2>
//         <h2>{this.state.gender}</h2>

//         <select value={this.state.favColor}
//         onChange={this.handleChange}
//         name="favColor">
//           <option value="Blue">Blue</option>
//           <option value="Red">Red</option>
//           <option value="Green">Green</option>
//           <option value="Yellow">Yellow</option>
//         </select>
//         <h2>{this.state.favColor}</h2>
//         <button>Submit</button>
//       </form>
//     );
//   }
// }
class App extends React.Component {

  render(){
    return(
      <div>
        <Header></Header>
        <MemeGenerator></MemeGenerator>
      </div>
    )
  }
}

//-----------components & container-----------
// function App(){
//   return(
//     <Form></Form>
//   )
// }

//------------fetch example
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       loading:false,
//       data: {}
//     };
//     // this.componentDidMount = this.componentDidMount.bind(this);
//   }
//   componentDidMount()
//   {
//     this.setState({
//       loading:true
//     });
//     fetch("http://swapi.dev/api/people/1")
//       .then(response => response.json())
//       .then(fetchedData =>{
//         this.setState({
//           loading:false,
//           data:fetchedData});
//       });
//   }

//   render() {
//     console.log(this.state.loading);
//     return(
//     <div>
//       <h1>{this.state.loading ? "loading..." : this.state.data.name}</h1>
//     </div>);
//   }
// }
export default App;
