import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare , turns }) {

  let gameBoard=initialGameBoard;

  for(const turn of turns){
    const {square,player}=turn;
    const {row,col}=square; 
  
    gameBoard[row][col]=player;
  }

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  // function selectQuare(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedGame = [
  //       ...prevGameBoard.map((innnerArray) => [...innnerArray]),
  //     ];
  //     updatedGame[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedGame;
  //   });
  //   onSelectSquare();
  // }
  return (
    <>
      <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button onClick={ () => onSelectSquare(rowIndex,colIndex )}>
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}
