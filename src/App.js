import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignupScreen from "./screens/SignupScreen";
import GameScreen from "./screens/GameScreen";
import Error from "./components/Error";

function App() {
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
