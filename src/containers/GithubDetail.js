import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { API } from "../Contants";
import ListRepo from "../components/ListRepo";
import ReactMarkdown from "react-markdown";

export default function GithubDetail() {
    const { user, repo } = useParams();
    console.log('xxx', user, repo)
    const [readme, setReadme] = useState('');

    const fetchReadMe = useCallback(async () => {
        const { status, data } = await axios.get(API.GET_README(user, repo));
        if (status === 200) {
            setReadme(data);
        }
    }, [repo, user])

    useEffect(() => {
        fetchReadMe();
    }, [fetchReadMe]);

    return (
        <div>
            Github readme: {user}
            {/* {readme} */}
            <ReactMarkdown>{readme}</ReactMarkdown>
        </div>
    );
}