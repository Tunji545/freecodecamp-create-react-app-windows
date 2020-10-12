import React from "react";
import "./index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // this.setState({count: 1}); When Previous State is not cared for.

    // When Previous state is cared for
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }
  render() {
    return (
      <div className="arrange">
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Count!</button>
      </div>
    )
  }
}

export default App;