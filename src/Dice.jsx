import Die from "./Die";
import "./Dice.css"
function Dice({dice , color="slateblue"}){
    return(<div class="Dice">
        {dice.map((e,index) => {
            return <Die key={index} val={e} color={color}/>
        })}</div>

    )

}



export default Dice