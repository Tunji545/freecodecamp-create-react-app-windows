import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function MyInfo() {

  return (
    <div>
      <h1>My name is Olatunji Omisakin</h1>
      <p>I am a enthusiastic programmer</p>
      <ul>
        <li>Jerusalem</li>
        <li>Silicon Valley</li>
        <li>USA White House</li>
      </ul>
    </div>
  )

}

ReactDOM.render(<MyInfo />, document.getElementById("root"))