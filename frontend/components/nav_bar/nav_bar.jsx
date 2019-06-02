import React from 'react';
import { Link } from 'react-router-dom';
import Session from '../nav_bar_session/nav_bar_session_container';

export default ({ currentUser, logout }) => {

    return (
        <header className="nav-bar">
            <ul className="nav-bar-ul">
                <li>
                    <ul id="logo">
                        <li >
                            <div id="circle"></div>
                        </li>
                        <li>
                            <h3 id="logo-words">openCounter</h3>
                        </li>
                    </ul>
                </li>
                <li><Session /></li>
            </ul>
            
            
        </header>
    )
};