import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to='/'>
            <ul id="logo">
                <li >
                    <div id="circle"></div>
                </li>
                <li>
                    <h2 id="logo-words">openCounter</h2>
                </li>
            </ul>
        </Link>
    )
}

export default Logo