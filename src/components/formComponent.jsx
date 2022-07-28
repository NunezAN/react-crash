function FormComponent(props){
    return(
        <main>
          <form onSubmit={props.handleSubmit}>
            <input
              onChange={props.handleChange}
              name="firstName"
              value={props.data.firstName}
              placeholder="First Name"
            />
            <br />
            <input
              onChange={props.handleChange}
              name="lastName"
              value={props.data.lastName}
              placeholder="Last Name"
            />
            <br />
            <input
              onChange={props.handleChange}
              name="age"
              value={props.data.age}
              placeholder="Age"
            />
            <br />
            {/*Create radio buttons for gender here*/}
            <label>Female</label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={props.handleChange}
            />
            <label>Male</label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={props.handleChange}
            />
            <br />
            {/*Create select box for location here*/}
            <label>Destination</label>
            <select
              name="destination"
              value={props.data.destination}
              onChange={props.handleChange}
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
              checked={props.data.dietaryRestrictions.isVegan}
              onChange={props.handleChange}
            />
            <label>Kosher</label>
            <input
              type="checkbox"
              name="dietaryRestrictions"
              value="isKosher"
              checked={props.data.dietaryRestrictions.isKosher}
              onChange={props.handleChange}
            />
            <label>Lactose Free</label>
            <input
              type="checkbox"
              name="dietaryRestrictions"
              value="isLactoseFree"
              checked={props.data.dietaryRestrictions.isLactoseFree}
              onChange={props.handleChange}
            />
            <br />
            <button>Submit</button>
            <h1>Entered Information</h1>
          </form>
          <h2>
            Your Name: {props.data.firstName} {props.data.lastName}
          </h2>
          <h2>Your Age: {props.data.age}</h2>
          <h2>Your Gender: {props.data.gender}</h2>
          <h2>Your Destination: {props.data.destination}</h2>
          <h2>Your Diatery Restrictions:</h2>
          <h3>Vegan: {props.data.dietaryRestrictions.isVegan? "Yes":"No"}</h3>
          <h3>Kosher: {props.data.dietaryRestrictions.isKosher? "Yes":"No"}</h3>
          <h3>Lactose Free: {props.data.dietaryRestrictions.isLactoseFree? "Yes":"No"}</h3>
        </main>
      );
}

export default FormComponent;