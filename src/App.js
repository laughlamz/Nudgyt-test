import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import GithubList from "./containers/GithubList";
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
          <Route path="/github_detail">
            <GithubDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function GithubDetail() {
  return <h2>Users</h2>;
}
