import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Details from "./Components/Game/Details";
import Collection from "./Components/Collection/Collection";
import SearchUser from "./Components/SearchUser/SearchUser";

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to="/">
            <img src={`${require("../media/logo.png")}`} alt="My BGG"></img>
          </Link>
        </header>
        <Switch>
          <Route path="/game/:id/:user?">
            <Details />
          </Route>
          <Route path="/collection/:user/">
            <Collection />
          </Route>
          <Route path="/">
            <SearchUser />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
/* 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);*/
