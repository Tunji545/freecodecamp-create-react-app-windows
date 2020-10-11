import React from "react";

function TodoItem(props) {

  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.completed} />
      <h3>text: {props.text}</h3>
    </div>
  )
}

export default TodoItem;