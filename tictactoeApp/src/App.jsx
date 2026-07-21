import './App.css'
import {Square} from './square.jsx'
import { useState } from "react";
function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i){
    const nextSquares=squares.slice();
    nextSquares[i]="x";
    setSquares(nextSquares);
  }

  return (
    <>
    <div className='row'>
      <Square value={squares[0]} onSquareClick={()=>handleClick(0)}></Square>
      <Square value={squares[1]} onSquareClick={handleClick(1)}></Square>
      <Square value={squares[2]} onSquareClick={handleClick(2)} ></Square>
    </div>
    <div className='row'> 
      <Square value={squares[3]} onSquareClick={handleClick(3)} ></Square>
      <Square value={squares[4]} onSquareClick={handleClick(4)} ></Square>
      <Square value={squares[5]} onSquareClick={handleClick(5)} ></Square>
    </div>
    <div className='row'>
      <Square value={squares[6]} onSquareClick={handleClick(6)}></Square>
      <Square value={squares[7]} onSquareClick={handleClick(7)}></Square>
      <Square value={squares[8]}  onSquareClick={handleClick(8)}></Square>
    </div>
    </>
  )
}

export default App
