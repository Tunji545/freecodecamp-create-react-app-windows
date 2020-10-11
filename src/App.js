import React from "react";

class App extends React.Component {

  render() {

    return(

      <div>
        <Heading username="vschool"/>
        <Greeting />
      </div>
    )
  }
}

class Heading extends React.Component {

  render() {

    return (
      <h3>Welcome {this.props.username}!</h3>
    )
  }
}

class Greeting extends React.Component {

  render() {
    const date = new Date();
    const hour = date.getHours();
    let timeOfDay;
    if (hour < 12) {
      timeOfDay = "Good Morning!";
    }
    else if (hour > 12 && hour < 17) {
      timeOfDay = "Good Afternoon!";
    }
    else {
      timeOfDay = "Good Night!"
    }

    return (
      <div>
        <h2>{timeOfDay} to you sir or ma.</h2>
      </div>
    )
  }
}

export default App;