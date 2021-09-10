import { ADD_TODO, DEL_CHECKED_TODO, DEL_TODO, EDIT_TODO } from "../types/todo.type";
let id=0
export const addTodo = (value) => (
    {
        type: ADD_TODO,
        payload: {
            id: ++id,
            content: value
        }
    }
);
export const deleteTodo = (id) => (
    {
        type: DEL_TODO,
        payload: id
    }
);
export const deleteChecked = (id) => (
    {
        type: DEL_CHECKED_TODO,
        payload: id
    }
);


export const editTodo = (id, value) => (
    {
        type: EDIT_TODO,
        payload: { 
            id: id,
            content: value
         }
    }
);