import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Articles from "./pages/Articles"; 

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
{/*        <Route exact path="/" component={Books} />
        <Route exact path="/nyt" component={Articles} />
        <Route exact path="/books/:id" component={Detail} />*/}
        <Route component={Articles} />
      </Switch>
    </div>
  </Router>;

export default App;
