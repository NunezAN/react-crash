import TodoItem from "./components/TodoItem.jsx";
import "./App.css";
import todosData from "./components/todosData.js";
import React from "react";
import Conditional from "./components/conditional.jsx";
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers.js";

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
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      dietaryRestrictions: {
        isVegan: false,
        isKosher: false,
        isLactoseFree: false,
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(this.state.dietaryRestrictions);
    console.log(event.target.name);
    console.log(event.target.value);
    console.log(event.target.checked);
    event.target.type === "checkbox" ? 
    this.setState(prevState =>{
      return {[event.target.name]:{...prevState.dietaryRestrictions,[event.target.value]: event.target.checked}}
    })
    : this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit() {
    console.log("Submitted");
  }

  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="age"
            value={this.state.age}
            placeholder="Age"
          />
          <br />
          {/*Create radio buttons for gender here*/}
          <label>Female</label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={this.handleChange}
          />
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={this.handleChange}
          />
          <br />
          {/*Create select box for location here*/}
          <label>Destination</label>
          <select
            name="destination"
            value={this.state.destination}
            onChange={this.handleChange}
          >
            <option value="oklahoma">Oklahoma</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Texas">Texas</option>
            <option value="Florida">Florida</option>
          </select>
          <br />
          {/*Create check boxes for dietary restrictions here*/}
          <label>DietaryRestrictions</label>
          <br />
          <label>Vegan</label>
          <input
            type="checkbox"
            name="dietaryRestrictions"
            value="isVegan"
            checked={this.state.dietaryRestrictions.isVegan}
            onChange={this.handleChange}
          />
          <label>Kosher</label>
          <input
            type="checkbox"
            name="dietaryRestrictions"
            value="isKosher"
            checked={this.state.dietaryRestrictions.isKosher}
            onChange={this.handleChange}
          />
          <label>Lactose Free</label>
          <input
            type="checkbox"
            name="dietaryRestrictions"
            value="isLactoseFree"
            checked={this.state.dietaryRestrictions.isLactoseFree}
            onChange={this.handleChange}
          />
          <br />
          <button>Submit</button>
          <h1>Entered Information</h1>
        </form>
        <h2>
          Your Name: {this.state.firstName} {this.state.lastName}
        </h2>
        <h2>Your Age: {this.state.age}</h2>
        <h2>Your Gender: {this.state.gender}</h2>
        <h2>Your Destination: {this.state.destination}</h2>
        <h2>Your Diatery Restrictions:</h2>
        <h3>Vegan: {this.state.dietaryRestrictions.isVegan? "Yes":"No"}</h3>
        <h3>Kosher: {this.state.dietaryRestrictions.isKosher? "Yes":"No"}</h3>
        <h3>Lactose Free: {this.state.dietaryRestrictions.isLactoseFree? "Yes":"No"}</h3>
      </main>
    );
  }
}

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
