import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/todoapp/actions/Index";
import { isCompleted } from "../redux/todoapp/actions/Index";
// import { isEditing } from "../redux/todoapp/actions/Index";
import UpdateTodo from "./UpdateTodo";
import { setEditing } from "../redux/todoapp/actions/Index";

function Todos() {
  const Todos = useSelector((state) => state.OperationsReducer);
  const dispatch = useDispatch();
  console.log(Todos);
  return (
    <div>
      {Todos.length > 0 && <h2>Todos List</h2>}

      {/* {Todos.map((todo) => {
        return (
          <div className="list-todo" key={todo.id}>
            <p>
              <b>Task :</b> <span className={`${todo.completed?"completed":"incompleted"}`}>{todo.todo}</span>
            </p>
            <p>
              {" "}
              <b>Description :</b> <span className={`${todo.completed?"completed":"incompleted"}`}>{todo.description} </span>{" "}
            </p>
            <p className="checkbox">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(isCompleted(todo.id))}
              />
              <span>Task Completed </span> <span>{todo.completed ? "✔️"  : "❎"}</span>
            </p>
            <div className="list-icons">
              <FontAwesomeIcon
               onClick={()=>dispatch(isEditing(todo.id))}
               className="edit-icon" icon={faPenToSquare} />
              <FontAwesomeIcon
                onClick={() => dispatch(removeTodo(todo.id))}
                className="delete-icon"
                icon={faTrash}
              />
            </div>
          </div>
        );
      })} */}

      {Todos.map((todo) => {
        return todo.isEditing ? (
          <div className="edit-todo" key={todo.id}>
            <UpdateTodo
              todo={todo}
              onUpdateComplete={() => dispatch(setEditing({ id: todo.id, isEditing: false }))}
            />
          </div>
        ) : (
          <div className="list-todo" key={todo.id}>
            <p>
              <b>Task :</b>{" "}
              <span className={todo.completed ? "completed" : "incompleted"}>
                {todo.todo}
              </span>
            </p>
            <p>
              <b>Description :</b>{" "}
              <span className={todo.completed ? "completed" : "incompleted"}>
                {todo.description}
              </span>
            </p>
            <p className="checkbox">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(isCompleted(todo.id))}
              />
              <span>Task Completed </span>
              <span>{todo.completed ? "✔️" : "❎"}</span>
            </p>
            <div className="list-icons">
              <FontAwesomeIcon
               onClick={() => dispatch(setEditing({ id: todo.id, isEditing: true }))}
                className="edit-icon"
                icon={faPenToSquare}
              />
              <FontAwesomeIcon
                onClick={() => dispatch(removeTodo(todo.id))}
                className="delete-icon"
                icon={faTrash}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
