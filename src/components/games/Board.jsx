import React from 'react'
import './Board.css'

const renderCel = (makeMove, rowIndex, cellIndex, number, hasTurn) => {
  return (
    <button
      className="board-tile"
      disabled={hasTurn}
      onClick={() => makeMove(rowIndex, cellIndex)}
      key={`${rowIndex}-${cellIndex}`}
    >{'-' || number}</button>
  )
}

export default ({board, makeMove}) => board.map((cells, rowIndex) =>
  <div key={rowIndex}>
    {cells.map((number, cellIndex) => renderCel(makeMove, rowIndex, cellIndex, number , false))}
  </div>
)