import React, { useContext } from "react";
import { GameContext } from "../context/game_context";
import "./Square.css";

const Square = props => {
  const { disable } = useContext(GameContext);
  const { value, onClick, isClick } = props;

  return (
    <div className={`${isClick ? "square clicked" : "square"}`}>
      <button className="square-btn" onClick={onClick} disabled={disable}>
        <span className="square-text">{value}</span>
      </button>
    </div>
  );
};

export default Square;
