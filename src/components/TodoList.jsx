import react, { useState } from "react"
import { connect } from "react-redux";
import { deleteChecked, deleteTodo, editTodo } from "../actions/todo.action";
import Button from "./Button";
import EditList from "./EditList";
import Input from "./Input";

const TodoList = (props) => {
    
    const [completed, setcompleted]=useState(false);
    const [completedid, setcompletedid]=useState();
    const [newArray, setnewArray]=useState([]);
    const [inputValue, setInputValue]=useState("");
    const [clickedIndex, setClickedIndex]=useState();

    //console.log("List Prop", props.list);
    
    const handleDelete = (index) => {
        props.deleteTodo(index)
    }
    const handleUpdate = (data) => {
        setInputValue(data.content)
        setClickedIndex(data.id)
    }
    const handleonclick = () => {
        props.deleteChecked(newArray)
        
    }

    const handleOnChange = (e) => {
        let checkboxid = JSON.parse(e.target.value)
        let checkindex = newArray.includes(checkboxid)
        //? null : setnewArray([...newArray,e.target.value]) 
        if (e.target.checked){
            //append to array
            setcompletedid(checkboxid.id)
            setcompleted(true)
            setnewArray([...newArray, checkboxid])
          } else {
            //remove from array
            setcompleted(false)
            newArray.splice(checkboxid, 1);
         }

        
    }
    
    return (
        <div>
        <ul>
            {props.list?.map((row, index) => (
                <li key={index}>{
                
                    clickedIndex && clickedIndex===row.id ? <>
                     <EditList callback={()=>setClickedIndex(null)} value={inputValue} id={row.id}/>
                    
                     </> : (completed && row.id===completedid ? <s>{row.content}</s> : row.content)} 
                <span onClick={()=>handleUpdate(row)}>  <button>Edit</button>  </span>     
                <span onClick={()=>handleDelete(row.id)}> <button> remove  </button></span>
                <input value={JSON.stringify(row)} type="checkbox" onChange={(e)=>handleOnChange(e)}></input> 
                </li>
            ))}
        </ul>
        
        <Button value="Remove Checked" click={handleonclick}/>
        </div>
    )
}


export default connect(null, {deleteTodo, editTodo, deleteChecked})(TodoList);