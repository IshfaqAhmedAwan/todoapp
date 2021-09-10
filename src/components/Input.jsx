import react from "react"

const Input = (props) => {
    
    return (
        <input type="text" placeholder="What to do!" onChange={props.onChange} defaultValue={props.value} />
    )
}
export default Input;