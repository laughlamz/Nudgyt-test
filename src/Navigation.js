import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Header() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/gituser_input">Gituser Input</Link>
                    </li>
                    <li>
                        <Link to="/github_list">Github list</Link>
                    </li>
                    <li>
                        <Link to="/github_detail">Github detail</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}
