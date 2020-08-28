import React from "react";
import Home from "./App";
import Settings from "./components/Main/MoreSettings";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const RouteLoader = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </Router>
  );
};

export default RouteLoader;
