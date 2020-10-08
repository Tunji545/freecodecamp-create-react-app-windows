import React from "react";
import ReactDOM from "react-dom";

function App() {
  const date = new Date(2020, 8, 10, 20);
  const hour = date.getHours();
  let timeOfDay;
  let styles = {
        fontSize: "30px",
      }
  if (hour < 12) {
    timeOfDay = "Morning!";
    styles.color = "#04756f"
  }
  else if (hour > 12 && hour < 17) {
    timeOfDay = "Afternoon!";
    styles.color = "#8914a3"
  }
  else {
    timeOfDay = "Night!";
    styles.color = "#d90000"
  }

  return (
    <h1 style={styles}>Good { timeOfDay }</h1>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));