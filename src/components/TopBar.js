import React from "react";
import './TopBar.css';
import { Button } from 'reactstrap';

export default function TopBar({ repo }) {
    return (
        <div className="TopBar">
            <div className="Signature">
                <img
                    className="BigIcon"
                    src="https://static.wixstatic.com/media/f3daa1_f5b1fda7563141ca916a3fa551142e7f~mv2.png/v1/fill/w_80,h_80,al_c,q_85,usm_0.66_1.00_0.01/n-white.webp"
                    alt="new"
                />
                <div className="Company">
                    UDGYT
                </div>
            </div>
            <div className="Info">
                Home
            </div>
        </div>
    );
}
