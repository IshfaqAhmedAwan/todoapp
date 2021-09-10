import react from "react"

const Button = (props) => {
    return (
        <button onClick={props.click}>
            {props.value}
        </button>
    )
}
export default Button;