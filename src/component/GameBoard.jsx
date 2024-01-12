import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard,setGameBoard]= useState(initialGameBoard);
  function selectQuare(rowIndex,colIndex){

    setGameBoard( (prevGameBoard)=>{
        const updatedGame = [...prevGameBoard.map(innnerArray => [...innnerArray])]
        updatedGame[rowIndex][colIndex]='X'
        return updatedGame;
     });
    
  }
  return (
    <>
      <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  {" "}
                  <button onClick={ () => selectQuare(rowIndex,colIndex)}>{playerSymbol}</button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}
