import React from "react";
import Square from "./Square";
import "./Text.css";

const Text = props => {
  const renderSquare = i => {
    return <Square value={props.board[i]} onClick={() => props.onClick(i)} />;
  };

  return (
    <div className="board-container-1">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Text;
