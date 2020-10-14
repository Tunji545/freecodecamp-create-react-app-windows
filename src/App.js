import React from "react";

// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

class App extends React.Component {
  constructor() {
    super();
  }

  static getDerrivedStateFromProps(props, state) {
    // return the new, updated state base upon props
    // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
    // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
  }

  getSnapshotBeforeUpdate() {
    // create a backup of the current state things are.
    // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
  }

  // componentWillMount() {

  // }

  componentDidMount() {
    // GET thedata I need to correctly display.
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.whatever !== this.props.whatever) {
  //     // do something important here.
  //   }
  // }

  shouldComponentUpdate(nextProps, nextState) {
    // return ture if you want it to update.
    // return false if not.
  }

  // componentWillUpdate() {

  // }

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