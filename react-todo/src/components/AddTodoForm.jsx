// src/components/AddTodoForm.jsx
import React, { useState } from "react";

function AddTodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} data-testid="add-todo-form" className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
        data-testid="todo-input"
        className="border px-2 py-1 rounded"
      />
      <button type="submit" data-testid="add-button" className="bg-blue-500 text-white px-3 py-1 rounded">
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;
