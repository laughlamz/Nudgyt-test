import React from "react";

export default function ListRepo({ repos }) {
    return (
        <div>
            <b>List</b>
            {(repos || []).map((repo) => 
                <div>{repo.name}</div>
            )}
        </div>
    );
}
