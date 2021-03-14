import React from "react";
import Square from "./Square";
import "./Board.css";

const Board = props => {
  const { board, onClick, isClick } = props;

  const renderSquare = i => {
    return (
      <Square value={board[i]} onClick={() => onClick(i)} isClick={isClick} />
    );
  };

  return (
    <div className="board-container">
      <table className="board-table">
        <tr className="board-row">
          <th>{renderSquare(0)}</th>
          <th>{renderSquare(1)}</th>
          <th>{renderSquare(2)}</th>
        </tr>
        <tr className="board-row">
          <th>{renderSquare(3)}</th>
          <th>{renderSquare(4)}</th>
          <th>{renderSquare(5)}</th>
        </tr>
        <tr className="board-row">
          <th>{renderSquare(6)}</th>
          <th>{renderSquare(7)}</th>
          <th>{renderSquare(8)}</th>
        </tr>
      </table>
    </div>
  );
};
export default Board;
