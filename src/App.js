import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import GithubList from "./containers/GithubList";
import GithubDetail from "./containers/GithubDetail";
import './App.css'
import TopBar from "./containers/TopBar";
import Welcome from "./components/Welcome";

export default function App() {
  return (
    <Router>
      <div className="Container">
        <TopBar />
        <div className="Content">
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route path="/github_list/:user">
              <GithubList />
            </Route>
            <Route path="/github_detail/:user/:repo">
              <GithubDetail />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
