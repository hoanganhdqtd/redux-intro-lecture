import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo } from "./actions";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      // const completedTasks = todos.filter((todo) => todo.completed);
      // console.log("completedTasks", JSON.stringify(completedTasks));
      // return completedTasks;
      return todos.filter((todo) => todo.completed);
    case "SHOW_ACTIVE":
      // const activeTasks = todos.filter((todo) => !todo.completed);
      // console.log("completedTask", JSON.stringify(activeTasks));
      // return activeTasks;
      return todos.filter((todo) => !todo.completed);
    default:
      return todos;
  }
};

function TodoList() {
  const { todos, filter } = useSelector((state) => state.todo);
  const filteredTodos = getVisibleTodos(todos, filter);
  const dispatch = useDispatch();

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => dispatch(toggleTodo(todo.id))}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
