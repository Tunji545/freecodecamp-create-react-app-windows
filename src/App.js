import React from "react";
import Jokes from "./components/Jokes";
import jokesData from "./components/jokesData";
import "./index.css";

function App() {
  const JokeComponent = jokesData.map(joke => <Jokes key={joke.id} Question={joke.Question} Punchln={joke.Punchln}/>)
  return (
    <div>
      {JokeComponent}
    </div>
  )
}

export default App;