import React from "react";

function TodoItem(props) {

  return (
    <div className="todo-item">
      <input type="checkbox" 
        checked={props.todos.completed} 
        onChange={() => props.handleChange(props.todos.id)} 
      />
      <h3>text: {props.todos.text}</h3>
    </div>
  )
}

export default TodoItem;