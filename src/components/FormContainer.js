import React from "react";
import FormComponent from "./FormComponent";

class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      Age: "",
      gender: "",
      isVeget: false,
      isKosher: false,
      isLactoseFree: false,
      location: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox" ? this.setState({
       [name] : checked }) 
    : 
    this.setState({ [name] : value })
  }

  render() {
    return (
      <div>
        <FormComponent 
          handleSubmit = {this.handleSubmit}
          handleChange = {this.handleChange}
          {...this.state}
        />
      </div>
    )
  }
}

export default FormContainer;