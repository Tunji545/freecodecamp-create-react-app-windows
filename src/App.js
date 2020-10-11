import React from "react";
import todoData from "./components/todoData";
import TodoItem from "./components/TodoItem";
import "./index.css"

function App() {
  const TodoComponent = todoData.map(todo => <TodoItem key={todo.id} text={todo.text} completed={todo.completed}/>)
  return(
    <div className="todo-list">
      {TodoComponent}
    </div>
  )
}

export default App;