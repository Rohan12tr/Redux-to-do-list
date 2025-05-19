import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { updateTodo } from "../redux/todoapp/actions/Index";


function UpdateTodo({ todo, onUpdateComplete }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(todo.todo );
  const [description, setDescription] = useState(todo.description || "");

   const [todoError, setTodoError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isTodoEmpty = title.trim() === "";
    const isDescriptionEmpty = description.trim() === "";

    setTodoError(isTodoEmpty);
    setDescriptionError(isDescriptionEmpty);


  //   if (!title.trim()) return;
  //   dispatch(
  //     updateTodo({
  //       id: todo.id,
  //       todo: title,
  //       description
  //     })
  //   );
  //   if (onUpdateComplete) {
  //     onUpdateComplete();
  //   }
  // };


  if (!isTodoEmpty && !isDescriptionEmpty) {
    dispatch(
      updateTodo({
        id: todo.id,
        todo: title,
        description
      })
    );
    if (onUpdateComplete) {
      onUpdateComplete();
    }
  }
  };

  return (
    <div>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          className={`todo-input ${todoError ? "inp-error" : ""}`}
          // onChange={(e) => setTitle(e.target.value)}
          onChange={(e) => { setTitle(e.target.value);if (e.target.value.trim() !== "") setTodoError(false);}}
          placeholder="What is the task today?"
        />
        <input
          type="text"
          value={description}
          className={`todo-input description ${descriptionError ? "inp-error" : ""}`}
          // onChange={(e) => setDescription(e.target.value)}
          onChange={(e) => { setDescription(e.target.value);if (e.target.value.trim() !== "") setTodoError(false);}}
          placeholder="Add description"
        />
        <button type="submit" className="todo-btn">
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateTodo;
