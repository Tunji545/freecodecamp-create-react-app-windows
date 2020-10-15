import React from "react";
import todoData from  "./components/todoData";
import TodoItem from "./components/TodoItem";
import "./index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItem: todoData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedState = prevState.todoItem.map(toDo => {
        if (id === toDo.id) {
          toDo.completed = !toDo.completed
        }
        return toDo;
      })
      return {
        todoItem: updatedState
      }
    })
  }
  render() {
    const TodoComponent = this.state.todoItem.map(todo => <TodoItem key={todo.id} todos={todo} handleChange={this.handleChange}/>)
    return (
      <div>
        {TodoComponent}
      </div>
    )
  }
}

export default App;