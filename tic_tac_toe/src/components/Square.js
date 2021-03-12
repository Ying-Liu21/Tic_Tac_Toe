import React, { useContext } from "react";
import { GameContext } from "../context/game_context";
import "./Square.css";

const Square = props => {
  const { disable } = useContext(GameContext);
  console.log("disable", disable);

  return (
    <div className="square">
      <button className="square-btn" onClick={props.onClick} disabled={disable}>
        {props.value}
      </button>
    </div>
  );
};

export default Square;
