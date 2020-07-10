import React from "react";
import "../styles/App.scss";
import Header from "./Header";
import Home from "./Home";
import Info from "./Info";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/info" component={Info} />
      </Switch>
    </div>
  );
};

export default App;
