import React from "react";
import "../styles/App.scss";
import Header from "./Header";
import Home from "./Home";
import Info from "./Info";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  state = { lang: false };

  langToggle = () => {
    this.setState({
      lang: !this.state.lang,
    });
  };

  render() {
    const { lang } = this.state;

    return (
      <div className="wrapper">
        <Header lang={lang} langToggle={this.langToggle} />
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} lang={lang} />} />
          <Route
            path="/info"
            render={(props) => <Info {...props} lang={lang} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
