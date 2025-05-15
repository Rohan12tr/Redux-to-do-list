import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoapp/actions/Index";

function Form() {
  const [todoValue, setTodoValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [todoError, setTodoError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const isTodoEmpty = todoValue.trim() === "";
    const isDescriptionEmpty = descriptionValue.trim() === "";

    setTodoError(isTodoEmpty);
    setDescriptionError(isDescriptionEmpty);

    if (!isTodoEmpty && !isDescriptionEmpty) {
      const id = Date.now();
      const todoObj = {
        id,
        todo: todoValue,
        description: descriptionValue,
        completed: false,
        isEditing: false,
      };
      dispatch(addTodo(todoObj)); //from  action/index.js
      setTodoValue("");
      setDescriptionValue("");
    }
  };

  return (
    <div>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoValue}
          className={`todo-input ${todoError ? "inp-error" : ""}`}
          placeholder="What is the task today?"
          onChange={(e) => {
            setTodoValue(e.target.value);
            if (e.target.value.trim() !== "") setTodoError(false);
          }}
        />
        <input
          type="text"
          value={descriptionValue}
          className={`todo-input description ${descriptionError ? "inp-error" : ""}`}
          placeholder="Add description"
          onChange={(e) => {
            setDescriptionValue(e.target.value);
            if (e.target.value.trim() !== "") setDescriptionError(false);
          }}
        />
        <button type="submit" className="todo-btn">
          Add task
        </button>
      </form>
    </div>
  );
}

export default Form;
