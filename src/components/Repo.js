import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../Contants";

export default function Repo({ repo }) {
    const { owner, name } = repo;
    const { login: user } = owner;
    

    return (
        <div>
            <Link to={`/github_detail/${user || 'none'}/${name || 'none'}`}>{name}</Link>
        </div>
    );
}
