import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer"

function App() {

  return (
    <div>
      <Header />
      <MainContainer />
      <Footer />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));