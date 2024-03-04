import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, EditTodoAction, RemoveTodoAction } from "./Actions/TodoActions";
import "./App.css";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("");
  const [editedTodo, setEditedTodo] = useState(""); // Added for editing

  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!editedTodo) {
      // Add new todo
      const newTodo = {
        id: uuidv4(),
        text: todo,
        completed: false,
      };

      dispatch(AddTodoAction(newTodo));
      setTodo(""); // Clear the input field
    } else {
      // Update existing todo
      dispatch(EditTodoAction(editedTodo.id, todo));
      setEditedTodo(""); // Reset the editedTodo state
      setTodo(""); // Clear the input field
    }
  };

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  };

  const editHandler = (t) => {
    setTodo(t.text); // Set the input field with the current todo text
    setEditedTodo(t); // Set the todo to be edited
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>My Todolist</h2>
        <form className="Todoform" onSubmit={handleSubmit}>
          <input
            placeholder="What todo"
            className="todo-btn"
             value={todo || ""}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            className="todo-btn"
          >
            {editedTodo ? "UPDATE" : "ADD"}
          </button>
          <ul className="show-todo">
            {todos &&
              todos.map((t) => (
                <li className="li-todo" key={t.id}>
                  <div className="text-todo">{t.text}</div>
                  <button
                    type="button"
                    className="edit-btn"
                    onClick={() => editHandler(t)}
                  >
                    edit
                  </button>
                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() => removeHandler(t)}
                  >
                    delete
                  </button>
                </li>
              ))}
          </ul>
        </form>
      </header>
    </div>
  );
}

export default App;
