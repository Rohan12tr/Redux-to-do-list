import { ADD_Todo } from "../actions/Index";
import { Delete_All } from "../actions/Index";



export const OperationsReducer = (state=[],action)=>{
  switch(action.type){
    case ADD_Todo:
        return [...state,action.payload];
        case Delete_All:
          return [];
    default: return state;
  }
}