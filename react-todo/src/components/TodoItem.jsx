// src/components/TodoItem.jsx
import React from "react";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      data-testid={`todo-${todo.id}`}
      onClick={() => onToggle(todo.id)}
      className={`flex justify-between items-center p-2 cursor-pointer ${
        todo.completed ? "line-through text-gray-500" : ""
      }`}
    >
      <span>{todo.text}</span>
      <button
        onClick={(e) => {
          e.stopPropagation(); // prevent toggle on delete click
          onDelete(todo.id);
        }}
        data-testid={`delete-${todo.id}`}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
