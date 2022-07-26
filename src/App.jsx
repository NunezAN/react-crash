import TodoItem from "./components/TodoItem.jsx";
import "./App.css";
import todosData from "./components/todosData.js";
import React from "react";
import Conditional from "./components/conditional.jsx";

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
  constructor(){
    super();
    this.state = {
      loading:false,
      data: {}
    };
    // this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount()
  {
    this.setState({
      loading:true
    });
    fetch("http://swapi.dev/api/people/1")
      .then(response => response.json())
      .then(fetchedData =>{
        this.setState({
          loading:false,
          data:fetchedData});
      });
  }

  render() {
    console.log(this.state.loading);
    return(
    <div>
      <h1>{this.state.loading ? "loading..." : this.state.data.name}</h1>
    </div>);
  }
}
export default App;
