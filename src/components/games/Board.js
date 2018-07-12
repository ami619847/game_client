import React from 'react'
import './Board.css'
//import { isSymbol } from 'util';

// const renderCel = (makeMove, rowIndex, cellIndex, hasTurn) => {
//   return (
//         <button
//             className="board-tile"
//             disabled={hasTurn}
//             onClick={() => makeMove(rowIndex, cellIndex)}
//             key={`${rowIndex}-${cellIndex}`}
//         >attack</button>
//   )
// }

const renderButton = (makeAttack, symbol, hasTurn) => {
    return (
        <button
            // className="board-attack"
            disabled={hasTurn}
            onClick={() => makeAttack(symbol)}
        >Attack</button>
    )
  }

export default
({board, makeAttack, gameTurn}) => board.map((cells, rowIndex) =>
    //{console.log(gameTurn)}
    <div>Player {cells[0]}, Health {cells[2]} {renderButton(makeAttack, cells[0], gameTurn!==cells[0])}</div>
)

// ({board, makeMove}) => board.map((cells, rowIndex) =>
//   <div key={rowIndex}>
//   {cells.map((symbol, cellIndex) => renderCel(makeMove, rowIndex, cellIndex,symbol,false))}
//   {rowIndex}
//   </div>
// )