import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { API } from "../Contants";
import ListRepo from "../components/ListRepo";

export default function GithubList() {
    const { user } = useParams();
    const [repos, setRepos] = useState([]);
    // TODO handle none case

    const fetchListRepo = useCallback(async () => {
        const { status, data } = await axios.get(API.LIST_REPO(user));
        if (status === 200) {
            setRepos(data);
        }
    }, [user, setRepos])

    useEffect(() => {
        fetchListRepo();
    }, [fetchListRepo]);

    console.log(repos)

    return (
        <div className="GithubList">
            Github repos of user: {user}
            <ListRepo repos={repos} />
        </div>
    );
}