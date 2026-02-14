import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Die from './Die'
import Dice from './Dice'
import LuckyN from "./LuckyN"
import {sum,getRolls} from "./utils"
function lessthan4(dice){
    return(sum(dice)<=4)
}
function sameNumber(dice){
  return  dice.every(val => val === dice[0]);
};



function App(){
  return(<div>
    {/* <LuckyN numDice={2} /> */}
    <LuckyN numDice={3} goal={8} winCheck={sameNumber} title="sameNumber"  />
    <LuckyN numDice={3} goal={8} winCheck={lessthan4} title="lessthan4" />
    {/* <LuckyN numDice={4} goal={10}/> */}

    </div>
  )
}
export default App


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
