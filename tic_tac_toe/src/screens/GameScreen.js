import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Game from "../components/Game";
import "./GameScreen.css";
import { retrieveToken } from "../utils/helpers";
import { GameContext } from "../context/game_context";
import GameResult from "../components/GameResult";
import Error from "../components/Error";

const GameScreen = props => {
  const { setDisable, showResult, movesError, getMovesError } = useContext(
    GameContext
  );

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

  const handleClickError = () => {
    getMovesError(false);
    history.push("/game");
  };

  if (movesError) {
    return <Error clickError={handleClickError} />;
  }

  return (
    <div className="game-container">
      <div className="game-header">
        <h1 className="game-title">TIC-TAC-TOE</h1>
      </div>
      <div className="game-content">
        {showResult ? <GameResult /> : <Game />}
        <button className="play-btn" onClick={handlePlay}>
          Play
        </button>
      </div>
    </div>
  );
};

export default GameScreen;
