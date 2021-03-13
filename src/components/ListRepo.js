import React from "react";
import Repo from "./Repo";
import './ListRepo.css';

export default function ListRepo({ repos }) {
    return (
        <div className="ListRepo">
            {(repos || []).map((repo) =>
                <Repo key={repo.id} repo={repo} />
            )}
        </div>
    );
}
