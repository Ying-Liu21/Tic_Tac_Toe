import React, { useContext } from "react";
import { GameContext } from "../context/game_context";
import "./GameResult.css";

const GameResult = () => {
  const { status, showResult, setShowResult, setDisable } = useContext(
    GameContext
  );

  const handlePlay = () => {
    setShowResult(false);
  };

  return (
    <div
      className={`${
        showResult ? "result-conatiner show-popover" : "result-conatiner"
      }`}
    >
      <header className="result-header">
        <h4 className="header-title">Game Over</h4>
      </header>
      <div className="result-content">
        <h4 className="result-text">{status} won the game</h4>
      </div>
      <div className="result-footer">
        <input
          type="submit"
          value="play again"
          onClick={handlePlay}
          className="btn"
        />
      </div>
    </div>
  );
};

export default GameResult;
