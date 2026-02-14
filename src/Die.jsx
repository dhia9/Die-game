import "./Die.css"
export default function Die({val,color}){
    return(
        <div class="Die" style={{backgroundColor:color}}>
            {val}
        </div>
    )
}