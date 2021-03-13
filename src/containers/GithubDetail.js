import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { API } from "../Contants";
import ListRepo from "../components/ListRepo";

export default function GithubDetail() {
    const { user, repo } = useParams();
    console.log('xxx', user, repo)
    // const [readme, setReadme] = useState('');

    // const fetchReadMe = useCallback(async () => {
    //     const { status, data } = await axios.get(API.LIST_REPO(user));
    //     console.log('xxx', data)
    //     if (status === 200) {
    //         setReadme(data);
    //     }
    // }, [user])

    // useEffect(() => {
    //     fetchReadMe();
    // }, [fetchReadMe]);

    return (
        <div>
            Github readme: {user}
        </div>
    );
}