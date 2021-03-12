import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import Loading from "./Loading";
import Board from "./Board";
import Error from "./Error";
import { toMatrix, toList, getNextMove } from "../utils/helpers";
import { GameContext } from "../context/game_context";
import "./Game.css";
import GameResult from "./GameResult";

const Game = props => {
  const [board, setBoard] = useState(Array(9).fill(""));

  const {
    status,
    setStatus,
    loading,
    movesError,
    showResult,
    setShowResult,
    getLoading,
    getMovesError
  } = useContext(GameContext);

  let history = useHistory();
  const calculateWinner = squares => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  let result;
  const isBoardFull = squares => {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === "") {
        return false;
      }
    }

    return true;
  };

  let winner = calculateWinner(board);
  // let status = "";
  const handleClick = i => {
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
      getMovesError(false);
    } catch (err) {
      getLoading(false);
      getMovesError(false);
    }
  };

  if (winner) {
    console.log(winner);
  } else if (isBoardFull(board)) {
    console.log("draw");
  }

  /*
  useEffect(() => {
    if (movesError) {
      setTimeout(() => {
        history.push("./");
      }, 3000);
    }

    if (winner) {
      setStatus(winner);
    } else if (isBoardFull(board)) {
      setStatus("Draw");
    } else {
      return;
    }
  }, [winner, isBoardFull]);
*/
  if (loading) {
    return <Loading />;
  }

  if (movesError) {
    return <Error />;
  }

  return (
    <div className="game">
      <Board board={board} onClick={i => handleClick(i)} />
    </div>
  );
};

export default Game;
