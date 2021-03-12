import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Game from "../components/Game";
import "./GameScreen.css";
import { retrieveToken } from "../utils/helpers";
import { GameContext } from "../context/game_context";

const GameScreen = () => {
  const { setDisable } = useContext(GameContext);

  let history = useHistory();
  let token = retrieveToken();

  const handlePlay = () => {
    setDisable(false);
  };
  useEffect(() => {
    if (!token) {
      setDisable(true);
      history.push("./");
    }
  }, [token]);

  return (
    <div className="game-container">
      <div className="game-header">
        <h1 className="game-title">TIC-TAC-TOE</h1>
      </div>
      <div className="game-content">
        <Game />
        <button className="play-btn" onClick={handlePlay}>
          Play
        </button>
      </div>
    </div>
  );
};

export default GameScreen;
