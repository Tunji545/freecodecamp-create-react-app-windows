import React from "react";

function Jokes(props) {

  return (
    <div>
      <h3 style={{display: props.joke.Question ? "block" : "none"}}>Questions: {props.joke.Question}</h3>
      <p style={{color: props.joke.Question ? "floralwhite" : "#888"}}>Punchln: {props.joke.Punchln}</p>
    </div>
  )
}

export default Jokes;