import React, { useState, useContext } from "react";
import axios from "axios";
import Loading from "./Loading";
import Board from "./Board";
import {
  toMatrix,
  toList,
  getNextMove,
  calculateWinner,
  isBoardFull
} from "../utils/helpers";
import { GameContext } from "../context/game_context";
import "./Game.css";

const Game = props => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isClick, setIsClick] = useState(false);

  const {
    setStatus,
    setShowResult,
    loading,
    getLoading,
    getMovesError
  } = useContext(GameContext);

  let winner = calculateWinner(board);
  const handleClick = i => {
    setIsClick(true);
    const boards = board.slice();
    if (winner || boards[i]) {
      return;
    }

    boards[i] = "X";
    setBoard(boards);
    fetchMove(boards);
  };

  const fetchMove = async boards => {
    getLoading(true);
    try {
      const boardMatrix = toMatrix(boards, 3);
      let token = sessionStorage.getItem("token");

      await axios
        .post(
          "https://zrp7d8y3q4.execute-api.us-east-2.amazonaws.com/dev/engine",
          {
            board: boardMatrix
          },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        .then(res => {
          let newBoard = toList(res.data.board);
          let nextMove = getNextMove(newBoard, boards);
          boards[nextMove] = "O";
        })
        .then(() => {
          getLoading(false);
          setBoard(boards);
        });
    } catch (err) {
      getLoading(false);
      getMovesError(true);
    }
  };

  if (winner) {
    setShowResult(true);
    setStatus(winner);
    setBoard(Array(9).fill(null));
  } else if (isBoardFull(board)) {
    setShowResult(true);
    setStatus("Draw");
    setBoard(Array(9).fill(null));
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="game">
      <Board board={board} onClick={i => handleClick(i)} isClick={isClick} />
    </div>
  );
};

export default Game;
