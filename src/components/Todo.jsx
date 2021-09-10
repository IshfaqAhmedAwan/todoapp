import { useState } from "react"
import { connect } from "react-redux"
import { addTodo } from "../actions/todo.action"
import Button from "./Button"
import Input from "./Input"
import TodoList from "./TodoList"

const Todo = (props) => {
    const [value, setValue] = useState("")
   
    const handleonclick = () => {
        props.addTodo(value)
        
    }

    const handleonchange = (e) => {
        setValue(e.target.value)
        
    }

    return (
        <div className="todo-app">
            <h2>MergeStack</h2>
            <h1>TODOLIST</h1>
            <div className="add-box">
                <Input onChange={(e)=>handleonchange(e)} />
                <Button value="+" click={handleonclick} />

                

            </div>
            <TodoList list={props.todolist} />
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
    todolist:state && state.todos.todo_list
    }
}

export default connect(mapStateToProps, {addTodo})(Todo);