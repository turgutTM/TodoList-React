import React, { useState } from "react";

const TodoForm = (addTodo) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task today"
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
