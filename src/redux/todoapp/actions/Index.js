export const ADD_Todo = "ADD_Todo"
export const Delete_All = "Delete_All"
export const Remove_Todo = "Remove_Todo"
export const Is_Completed = "Is_Completed"
export const Is_Editing = "Is_Editing"
export const Update_Todo = "Update_Todo"
export const SET_EDITING = "SET_EDITING";

export const addTodo =(payload)=>{   //use dispatch to use this function to your jsx
    return{
        type:ADD_Todo,   // case which use in reducer
        payload
    }
} //PASS IT TO REDUCER
 
export const delete_all = ()=>{
    return{
        type:Delete_All
    }
}


export const removeTodo = (payload)=>{
  return{
    type:Remove_Todo,
    payload
  }
}

export const isCompleted = (payload)=>{
  return{
    type:Is_Completed,
    payload
  }
}

export const isEditing = (payload)=>{
return{
    type:Is_Editing,
    payload
}
}

export const updateTodo = (payload)=>{
  return {
    type: Update_Todo,
    payload,
  };
};

  export const setEditing = (payload) => {
    // payload is an object like { id, isEditing }
    return {
      type: SET_EDITING,
      payload,
    };
  };


