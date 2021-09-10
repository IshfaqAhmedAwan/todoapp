import {createStore, combineReducers} from 'redux'
import { todos } from './reducers/todo.reducer'

export default createStore(combineReducers({todos: todos}), 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())