import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { API } from "../Contants";
import ReactMarkdown from "react-markdown";
import './GithubList.css';

export default function GithubDetail() {
    const { user, repo } = useParams();
    const [readme, setReadme] = useState('');

    const fetchReadMe = useCallback(async () => {
        try {
            const { status, data } = await axios.get(API.GET_README(user, repo));
            if (status === 200) {
                setReadme(data);
            } else {
                setReadme('');
            }
        } catch(e) {
            setReadme('');
        }
    }, [repo, user])

    useEffect(() => {
        fetchReadMe();
    }, [fetchReadMe]);

    console.log('aaa', readme)

    return (
        <div>
            Github readme: {user}
            {readme === '' && 'There is not readme file'}
            {readme !== '' && <ReactMarkdown>{readme}</ReactMarkdown>}
        </div>
    );
}