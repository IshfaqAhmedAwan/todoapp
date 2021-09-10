import { useState } from "react";
import { connect } from "react-redux";
import { editTodo } from "../actions/todo.action";
import Button from "./Button";
import Input from "./Input";

const EditList = (props) => {
    const [inputValue, setInputValue]=useState("");
    const [clickedIndex, setClickedIndex]=useState();

    const handleOnChange = (e) => {
        setInputValue(e.target.value)
        //console.log("editlist change",id)
    }

    const handleUpdateData = () => {
        props.editTodo(props.id, inputValue)
        props.callback()
        console.log("This", props.id, inputValue)
    }
    
    return (
        
        //<Input value={inputValue} onChange={(e)=>handleOnChange(e, row.id)} />
        //<Button value="update" onClick={console.log("done")} />
        <div>
            <Input value={props.value} onChange={(e)=>handleOnChange(e)} />
            <Button value="update" click={handleUpdateData} />
            
        </div>
        
    )

}

const mapStateToProps = (state) => {
    return{
    todolist:state && state.todos.todo_list
    }
}

export default connect(mapStateToProps, {editTodo})(EditList);