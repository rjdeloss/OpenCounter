import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../shared/logo/logo'
import Session from '../nav_bar_session/nav_bar_session_container';

export default () => {
    return (
        <header className="header-container">
            <Logo />
            <Session />
        </header>
    )
}