// src/__tests__/TodoList.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  });

  test("can add a new todo", () => {
    render(<TodoList />);
    const input = screen.getByTestId("todo-input");
    const addButton = screen.getByTestId("add-button");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("can toggle a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");

    // should not have line-through initially
    expect(todo).not.toHaveClass("line-through");

    fireEvent.click(todo);

    // after toggle, should have line-through
    expect(todo).toHaveClass("line-through");
  });

  test("can delete a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Build Todo App");
    const deleteButton = screen.getByTestId(`delete-2`);

    fireEvent.click(deleteButton);

    expect(todo).not.toBeInTheDocument();
  });
});
