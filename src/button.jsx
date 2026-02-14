import "./button.css"

function Button({clickFunc ,label}){
    return <button className="Button" onClick={clickFunc}>{label} </button>
}

export default Button;