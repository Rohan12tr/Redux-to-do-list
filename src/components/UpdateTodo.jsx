import React from "react";


function UpdateTodo() {
  
   
  return (
    <div>
      <form className="TodoForm" >
        <input
          type="text"
          placeholder="What is the task today?"
        />
        <input
          type="text"
          placeholder="Add description"
        />
        <button type="submit" className="todo-btn">
          Update
        </button>
      </form>
    </div>
  )
}

export default UpdateTodo
