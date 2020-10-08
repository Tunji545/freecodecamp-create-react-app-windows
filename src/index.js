import React from "react";
import ReactDOM from "react-dom";

function App() {

  const date = new Date( );
  const hour = date.getHours();
  let time;
  if (hour < 12) {
    time = "Morning!";
  }
  else if (hour > 12 && hour < 17) {
    time = "Afternoon!";
  }
  else {
    time = "Night!";
  }
  return (
    <h1>Good { time } The time is { hour % 12 } o'clock.</h1>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));