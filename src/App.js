import React from "react";

// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // GET thedata I need to correctly display.
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.whatever !== this.props.whatever) {
      // do something important here.
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // return ture if you want it to update.
    // return false if not.
  }

  componentWillUnmount() {
    // teardowm or clean up your code before your component disappear.
    // (E.g remove event listeners.)
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default App;