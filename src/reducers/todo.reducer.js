import { ADD_TODO, DEL_CHECKED_TODO, DEL_TODO, EDIT_TODO } from "../types/todo.type"

export const todos = (state = {todo_list : []}, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return (
                {
                    ...state,
                    todo_list: [...state.todo_list, action.payload]
                }
            )
        }

        case DEL_TODO: {
            return(
                {
                    ...state,
                    todo_list: state.todo_list.filter(
                       (todo) => todo.id !== action.payload
                    )
                }
            )
        }

        case DEL_CHECKED_TODO: {
            console.log("action.payload", action.payload)
            let x = state.todo_list
            x = state.todo_list.filter(ar => !action.payload.find(rm => (rm.id === ar.id && ar.content === rm.content) ))

            console.log("value of x ", x)
            return(
                {
                    ...state,
                    todo_list: x
                }
            )
        }

        case EDIT_TODO: {
            console.log("reducer action", action.payload)
            return { 
                ...state, 
                todo_list: state.todo_list.map(
                    (item) => item.id === action.payload.id ? {...action.payload}
                                            : item
                )
             }
        }

        default: {
            return state
        }
    }
}