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

export default function App() {
  return (
    <Router>
      <div className="Container">
        <TopBar />
        <div style={{ marginTop: '30px', marginLeft: '35px', marginRight: '50px' }}>
          <Switch>
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
