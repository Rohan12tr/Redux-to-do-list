import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

function Todos() {
  const Todos = useSelector((state) => state.OperationsReducer);
  console.log(Todos);
  return (
    <div>
      <h1>Todos List</h1>

      {Todos.map((todo) => {
        return (
          <div className="list-todo" key={todo.id}>
            <p><b>Task :</b> {todo.todo}</p>
            <p> <b>Description :</b> {todo.description} </p>
            <div className="list-icons">
        <FontAwesomeIcon className="edit-icon"icon={faPenToSquare}/>
        <FontAwesomeIcon className="delete-icon"  icon={faTrash}/>

      </div>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
