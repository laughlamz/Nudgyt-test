import React from "react";
import Repo from "./Repo";

export default function ListRepo({ repos }) {
    return (
        <div>
            <b>List</b>
            {(repos || []).map((repo) =>
                <Repo repo={repo} />
            )}
        </div>
    );
}
