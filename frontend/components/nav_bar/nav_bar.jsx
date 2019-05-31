import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <p>Hello, {currentUser.fname} {currentUser.lname}</p>
            <button onClick={logout}>Logout</button>
        </div>
    ) : (
        <div>
            <Link to='/signup' >Sign Up</Link>
            <Link to='/signin' >Sign in</Link>
        </div>
    );

    return (
        <header className="nav-bar">
            { display }
        </header>
    )
};