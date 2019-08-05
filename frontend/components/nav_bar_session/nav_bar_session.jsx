import React from 'react';
import { Link } from 'react-router-dom';

const Session = ({currentUser, logout, openModal}) => {
    const sessionButtons = () => (
        <div className="session-container">    
            <a className="signup-button nav-button" onClick={() => openModal('signup')}>Sign up</a>
            <a className="signin-button nav-button" onClick={() => openModal('signin')}>Sign in</a>
        </div>
    );

    const toggleDropdown = () => {
        $("#dropdown-menu").toggleClass('dropdown-active');
    }

    const profileDropdown = () => (
                <div className="dropdown">
                    <h3  onClick={() =>toggleDropdown() }>Hi {currentUser.fname}</h3>
                    <ul id="dropdown-menu" className="dropdown-content">
                        <li><a href="#">My Profile</a></li>
                        <li><a href="#">My Dining History</a></li>
                        <li><a href="#">My Saved Restaurants</a></li>
                        <li><a href="#" onClick={ () => logout() }>Sign Out</a></li>
                    </ul>
                </div>
    );
    return (
        !currentUser ? sessionButtons() : profileDropdown()

    );

}

export default Session;