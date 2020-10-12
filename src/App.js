import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: "Yes"
    }
  }
  render() {
    let wordDisplay;
    if(this.state.isLoggedIn === "Yes") {
      wordDisplay = "yes";
    }
    else {
      wordDisplay = "no";
    }
    return(
      <div>
        <h1>You are currently logged in {wordDisplay}</h1>
      </div>
    )
  }
}

export default App;