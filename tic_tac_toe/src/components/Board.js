import React from "react";
import Square from "./Square";
import "./Board.css";

const Board = props => {
  const { board, onClick } = props;

  return (
    <div className="board-container">
      {board.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};
export default Board;
