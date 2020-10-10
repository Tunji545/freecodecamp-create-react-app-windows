import React from "react";
import Jokes from "./components/Jokes";
import "./index.css"

function App() {

  return (
    <div className="jokes">
      <Jokes joke={{Question: "What is puns?", Punchln: "It is add to explain puns  to kleptomaniac because they always take things literally."}} />
      <Jokes joke={{Question: "Why are hyenas dangerous?", Punchln: "Hyenas are dangerous because you don't know when they are angry, always lauging!"}} />
      <Jokes joke={{Question: "How do I know I exist?", Punchln: "And who shall I say is asking?"}} />
      <Jokes joke={{Punchln: "It is sheer arrogance to contract illness that is beyond your means."}} />
    </div>
  )
}

export default App;