import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import './Repo.css';

export default function Repo({ repo }) {
    const history = useHistory();
    const { owner, name } = repo;
    const { login: user } = owner;
    
    const onClick = useCallback(() => {
        history.push(`/github_detail/${user || 'none'}/${name || 'none'}`);
      }, [history, name, user]);

    return (
        <div className="Repo" onClick={onClick}>
            {name}
        </div>
    );
}
