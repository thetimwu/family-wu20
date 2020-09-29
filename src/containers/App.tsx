import React from "react";
import Header from "../components/layout/Header";
import Content from "../components/layout/Content";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginForm from "../components/Login/LoginForm";

function App(): JSX.Element {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Content />
            Tim Wu
          </div>
        </Route>
        <Route exact path="/login">
          <LoginForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
