
export const ADD_Todo = "ADD_Todo"
export const Delete_All = "Delete_All"

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
