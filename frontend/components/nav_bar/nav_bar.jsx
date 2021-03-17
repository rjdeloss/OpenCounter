import React from 'react';
import { Link } from 'react-router-dom';
import Session from '../nav_bar_session/nav_bar_session_container';

export default ({ currentUser, logout }) => {
    return (
        <header className="nav-bar">
            <ul className="nav-bar-ul">
                <Link to='/'>
                <li>
                    <ul id="logo">
                        <li >
                            <div id="circle"></div>
                        </li>
                        <li>
                            <h2 id="logo-words">openCounter</h2>
                        </li>
                    </ul>
                </li>
                </Link>
                <li><Session /></li>
            </ul>
            
            
        </header>
    )
};