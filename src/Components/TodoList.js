import React from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";

const TodoList = (props) => {
  return (
    <div className="TodoList">
      {props.todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={props.onRemove}
          onToggle={props.onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
