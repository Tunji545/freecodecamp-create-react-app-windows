import React from "react";

// function App(props) {

//   return (
//     <h2>{props.whatever}</h2>
//   )
// }

class App extends React.Component {
  yourMethodHere() {

  }
  render() {

    return (
      <h2>{this.props.whatever}</h2>
    )
  }
}

export default App;