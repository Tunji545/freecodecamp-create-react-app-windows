import React from "react";

function FormComponent(props) {

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
          <input 
            type="text" 
            name="firstName" 
            value={props.firstName} 
            placeholder="firstName" 
            onChange={props.handleChange} 
          />
          <br />
          <input 
            type="text" 
            name="lastName" 
            value={props.lastName} 
            placeholder="lastName" 
            onChange={props.handleChange} 
          />
          <br />
          <input 
            type="number" 
            name="Age" 
            value={props.Age} 
            placeholder="20" 
            onChange={props.handleChange} 
          />
          <br />
          <label>
            <input 
              type="radio" 
              name="gender" 
              value="male"
              checked={props.gender === "male"} 
              onChange={props.handleChange} 
            /> male
          </label>
          <label>
            <input 
              type="radio" 
              name="gender"
              value="female"
              checked={props.gender === "female"}
              onChange={props.handleChange}
            /> Female
          </label>
          <br />
          <label>
            <input 
              type="checkbox"
              name="isVeget"
              checked={props.isVeget}
              onChange={props.handleChange}
            /> isVeget
          </label>
          <br />
          <label>
            <input 
              type="checkbox"
              checked={props.isKocher}
              name="isKocher"
              onChange={props.handleChange}
            /> isKocher
          </label>
          <br />
          <label>
            <input 
              type="checkbox"
              checked={props.isLactoseFree}
              name="isLactoseFree"
              onChange={props.handleChange}
            /> isLactoseFree
          </label>
          <br />
        <select name="location" value={props.value} onChange={props.handleChange}>
          <option value="">--Please choose a destination --</option>
          <option value="America">America</option>
          <option value="Great Britain">Great Britain</option>
          <option value="Swizerland">Swizerland</option>
          <option value="France">France</option>
          <option value="Germany">Germany</option>
        </select>
        <br />
        <button>Submit</button>
        </form>
        <h1>{props.firstName} {props.lastName}</h1>
        <h1>{props.Age}</h1>
        <h1>{props.gender}</h1>
        <h1>Dietary</h1>
        <h1>isVeget: {props.isVeget ? "yes" : "no"}</h1>
        <h1>isKocher: {props.isKocher ? "yes" : "no"}</h1>
        <h1>isLactoseFree: {props.isLactoseFree ? "yes" : "no"}</h1>
        <h1>{props.location}</h1>
    </div>
  )
}

export default FormComponent;