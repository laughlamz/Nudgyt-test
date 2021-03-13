import React from "react";
import {
    Link
} from "react-router-dom";

export default function Header() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/user_input">User Input</Link>
                    </li>
                    <li>
                        <Link to="/github_detail">Github detail</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
