import React from "react";

function Jokes(props) {
  
  return (
    <div className="jokes">
      <h3 style={{display: props.Question ? "block" : "none"}}>Question: {props.Question}</h3>
      <p style={{color: props.Question ? "floralwhite" : "#888"}}>Punchln: {props.Punchln}</p>
    </div>
  )
}

export default Jokes;