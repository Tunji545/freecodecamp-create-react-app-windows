import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      unreadMessage: [
        "Call Mum",
        "New spam email available, all links safe to click."
      ]
    }
  }

  // &&
  // true && false - 
  // if (truthy i.e. left side = true, then right side gets rendered.if not, nothing gets rendered)
  // if(falsy i.e. left side = false, then nothing gets rendered even if the right side is true.)
  render() {
    return(
      <div>
        {/* {this.state.unreadMessage.length > 0 ? <h1>You have {this.state.unreadMessage.length} unread Messages</h1>
        : null} */}
        {this.state.unreadMessage.length > 0 && <h1>You have {this.state.unreadMessage.length} unread Messages</h1>}
      </div>
    )
  }
}

export default App;