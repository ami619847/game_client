import React from 'react'
import './Board.css';
import Fistbutton from '../../images/fist-button.png';

const renderCel = (makeMove, rowIndex, cellIndex, number, hasTurn) => {
  return (
    <button
      className="board-tile"
      disabled={hasTurn}
      onClick={() => makeMove(rowIndex, cellIndex)}
      key={`${rowIndex}-${cellIndex}`}
    >{<img src={Fistbutton}/> || number}</button>
  )
}

export default ({board, makeMove}) => board.map((cells, rowIndex) =>
  <div key={rowIndex}>
    {cells.map((number, cellIndex) => renderCel(makeMove, rowIndex, cellIndex, number , false))}
  </div>
)