import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import SignupScreen from "./screens/SignupScreen";
import GameScreen from "./screens/GameScreen";
import GameResult from "./components/GameResult";
import { GameContext } from "./context/game_context";

import Error from "./components/Error";

function App() {
  /*
  const { showResult, setShowResult } = useContext(GameContext);

  const handleBlur = () => {
    if (showResult) {
      setShowResult(false);
    }
  };
*/
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <SignupScreen />
          </Route>
          <Route path="/game">
            <GameScreen />
          </Route>
          <Route path="/error">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
