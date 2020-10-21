import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      text: "",
      isFriendly: true,
      gender: "",
      favColor: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            value={this.state.value} 
            name="firstName"  
            placeholder="firstName" 
            onChange={this.handleChange}
          />
          <br />
          <input 
            type="text" 
            value={this.state.value} 
            name="lastName"  
            placeholder="lastName" 
            onChange={this.handleChange} 
          />
          <br />
          <textarea 
            name="text" 
            value={this.state.value} 
            placeholder="Write your note here." 
            onChange={this.handleChange}
          />
          <br />
          <label>
            <input 
              type="checkbox" 
              name="isFriendly"
              checked={this.state.isFriendly} 
              onChange={this.handleChange}
            /> isFriendly
          </label>
          <br />
          <label>
          <input 
            type="radio" 
            name="gender"
            value="male" 
            checked={this.state.gender === "male"} 
            onChange={this.handleChange}
          /> Male
          </label>
          <br />
          <label>
          <input 
            type="radio" 
            name="gender"
            value="female" 
            checked={this.state.gender === "female"} 
            onChange={this.handleChange}
          /> female
          </label>
          <br />
          <select name="favColor" value={this.state.value} onChange={this.handleChange}>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
          </select>
          <h1>{this.state.firstName} {this.state.lastName}</h1>
          <h1>{this.state.text}</h1>
          <h1>{this.state.gender}</h1>
          <h1>{this.state.favColor}</h1>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default App;