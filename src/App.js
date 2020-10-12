import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      answer: "Yes"
    }
  }

  render() {
    return (
      <div>
        <h2>Is state really important? {this.state.answer}</h2>
        <ChildComponent answer={this.state.answer} />
      </div>
    )
  }
}

class ChildComponent extends React.Component {

  render() {
    return (
      <p>{this.props.answer}</p>
    )
  }
}

export default App;