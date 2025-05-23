import { ADD_Todo } from "../actions/Index";
import { Delete_All } from "../actions/Index";
import { Remove_Todo } from "../actions/Index";
import { Is_Completed } from "../actions/Index";
import { Is_Editing } from "../actions/Index";
import { Update_Todo } from "../actions/Index";
import { SET_EDITING } from "../actions/Index"; 

export const OperationsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_Todo:
      return [...state, action.payload];

    case Delete_All:
      return [];

    case Remove_Todo:
      console.log("Deleted-id", action.payload);
      return state.filter((todo) => todo.id !== action.payload);

    case Is_Completed:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case Is_Editing:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isEditing: !todo.isEditing }
          : todo
      );

    case Update_Todo:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              todo: action.payload.todo, // Make sure this matches the property name
              description: action.payload.description,
              isEditing: false,
            }
          : todo
      );

    case SET_EDITING:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isEditing: action.payload.isEditing }
          : todo
      );

    default:
      return state;
  }
};
