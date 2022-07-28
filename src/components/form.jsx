import React from 'react';
import FormComponent from './formComponent';

class Form extends React.Component {
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
      return(
        <FormComponent 
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        data={this.state}></FormComponent>
      );
    }
  }

export default Form;