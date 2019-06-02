import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({currentUser, logout, openModal}) => {
    const sessionButtons = () => (
        <div className="session-container">    
            <Link to="" className="signup-button nav-button" onClick={() => openModal('signup')}>Sign Up</Link>
            <Link to="" className="signin-button nav-button" onClick={() => openModal('signin')}>Sign In</Link>
        </div>
    );

    const profileDropdown = () => (
        
        <ul className="dropdown">
            <li >
                <h3>Hi {currentUser.fname}</h3>
                <ul className="dropdown-content">
                    <li><a href="#">My Profile</a></li>
                    <li><a href="#">My Dining History</a></li>
                    <li><a href="#">My Saved Restaurants</a></li>
                    <li><a href="#" onClick={ () => logout() }>Sign Out</a></li>
                </ul>
            </li>
        </ul>
    );
    
    return (
        currentUser ? profileDropdown() : sessionButtons()

    );

}

export default Home;