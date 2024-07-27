import { useState } from "react";
function Square({value,onSquareClick}){
  return<button className="square" onClick={onSquareClick}>{value}</button>
}

export default function Board(){
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  
  function handleClick(i){
    if(calcuteWinner(squares) || squares[i]){
      return;
    }
    const nextSquare = squares.slice();
    if(xIsNext){
      nextSquare[i] = "X";
    }else{
      nextSquare[i] = "0";
    }
    setSquares(nextSquare);
    setXIsNext(!xIsNext)
  }
  const winner = calcuteWinner(squares);
  let status;
  if(winner){
    status = "Winner" + winner;
  }else{
    status = "Next Player: " + (xIsNext ? "X" : "0");
  }
  return(
    <>
    <div className="container vh-100">
      <div className="row h-100 align-items-center">
        <div className="col-auto mx-auto">
          <div className="row">
            <div className="col-auto">{status}</div>
          </div>
          <div className="row">
            <div className="col-auto px-0">
              <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
            </div>
            <div className="col-auto px-0">
              <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
            </div>
            <div className="col-auto px-0">
              <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            </div>
          </div>
          <div className="row">
            <div className="col-auto px-0">
              <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
            </div>
            <div className="col-auto px-0">
              <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
            </div>
            <div className="col-auto px-0">
              <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
            </div>
          </div>
          <div className="row">
            <div className="col-auto px-0">
              <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
            </div>
            <div className="col-auto px-0">
              <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
            </div>
            <div className="col-auto px-0">
              <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

function calcuteWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for(let i =0; i<lines.length; i++){
    const[a,b,c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}