import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import GituserInput from "./containers/GituserInput";
import Header from "./Navigation";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/gituser_input">
            <GituserInput />
          </Route>
          <Route path="/github_list">
            <GithubList />
          </Route>
          <Route path="/github_detail">
            <GithubDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function GithubList() {
  return <h2>About</h2>;
}

function GithubDetail() {
  return <h2>Users</h2>;
}
