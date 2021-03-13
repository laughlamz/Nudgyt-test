import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import GithubList from "./containers/GithubList";
import GithubDetail from "./containers/GithubDetail";
import UserInput from "./containers/UserInput";
import Header from "./Navigation";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/user_input">
            <UserInput />
          </Route>
          <Route path="/github_list/:user">
            <GithubList />
          </Route>
          <Route path="/github_detail/:user/:repo">
            <GithubDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
