import React from "react";

function TodoItem(props) {
  let styles = {
    color: "gray",
    textDecoration: "line-through",
    fontStyle: "italic"
  }
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.todos.completed} onChange={() => {props.handleClick(props.todos.id)}} />
      {props.todos.completed ? <h2 style={styles}>{props.todos.text}</h2> : <h2>{props.todos.text}</h2>}     
    </div>
  )
}

export default TodoItem;