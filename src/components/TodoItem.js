import React from "react";

function TodoItem(props) {
  let styles = {
    color: "gray",
    textDecoration: "line-through",
    fontStyle: "italic"
  }
  return (
    <div className="todo-item">
      <input type="checkbox" 
        checked={props.todos.completed} 
        onChange={() => props.handleChange(props.todos.id)} 
      />
      {/* { props.todos.completed 
        ? <h3 style={styles}>text: {props.todos.text}</h3>
        : <h3>text: {props.todos.text}</h3>} */}
        <h3 style={props.todos.completed ? styles: null}>text: {props.todos.text}</h3>
    </div>
  )
}

export default TodoItem;