import { useState } from "react";
import Dice from "./Dice";
import {sum,getRolls} from "./utils"
import Button from "./button";

function LuckyN({numDice=2,goal=7,winCheck,title,label="Re-Roll"}){
        const [dice,setDice]=useState(()=>getRolls(numDice))
        const isWinner=winCheck(dice);
        const roll = ()=>setDice(getRolls(numDice))
        return(
            <main>
                <h1>{title} {isWinner && "You Win"}</h1>
                <Dice dice={dice}/>

                <Button clickFunc={roll} label={label}/>
            </main>
        )

}
export default LuckyN