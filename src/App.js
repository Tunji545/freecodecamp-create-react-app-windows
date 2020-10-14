import React from "react";
import todoData from "./components/todoData";
import TodoItem from "./components/TodoItem";
import "./index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoData
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {
    this.setState(prevState => {
      const UpdatedTodos = prevState.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
      return {
        todos: UpdatedTodos
      }
    })
  }
  render() {
    const TodoComponent = this.state.todos.map(todo => <TodoItem key={todo.id} todos={todo} handleChange={this.handleChange}/>)
    return (
      <div className="todo-list">
        {TodoComponent}
      </div>
    )
  }
}

export default App;