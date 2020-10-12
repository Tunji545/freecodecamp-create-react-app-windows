import React from "react";
import todoData from "./components/todoData";
import TodoItem from "./components/TodoItem";
import "./index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItem: todoData 
    }
  }
  render() {
    const TodoComponent = this.state.todoItem.map(todo => <TodoItem key={todo.id} todos={todo} />);
    return (
      <div className="todo-list">
        {TodoComponent}
      </div>
    )
  }
}

export default App;