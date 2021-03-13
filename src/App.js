import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import GithubList from "./containers/GithubList";
import GithubDetail from "./containers/GithubDetail";
import Header from "./Navigation";
import './App.css'

export default function App() {
  return (
    <Router>
      <div className="Container">
        <Header />
        <Switch>
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
