import React from "react";

// function App() {

//   function clickMe() {
//     console.log("You clicked me!");
//   }
//   return (
//     <div>
//       <img src={require(`./images/bible.jpg`)} alt="bible"/>
//       <br />
//       <br />
//       <h3 onClick={clickMe}>Click me.</h3>
//     </div>
//   )
// }

class App extends React.Component {
  constructor() {
    super();
  }
  clickMe() {
    console.log("You clicked me!");
  };
  mouseOver() {
    console.log("mouseOver")
  }
  render() {
    
    return (
      <div>
        <img src={require(`./images/bible.jpg`)} alt="bible"/>
        <br />
        <br />
        {/* <h3 onClick={() => console.log("You clicked me!")}>Click me.</h3> */}
        <h3 onClick={this.clickMe} onMouseOver={this.mouseOver}>Click Me.</h3>
      </div>
    )
  }
}

export default App;