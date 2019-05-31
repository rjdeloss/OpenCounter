import React from 'react';
// import { openModal } from '../../actions/modal_action'
import { Link } from 'react-router-dom';

const Home = ({currentUser, logout, openModal}) => {
    const sessionButtons = () => (
        <div className="session-container">    
            <Link to="" className="signup-button nav-button" onClick={() => openModal('signup')}>Sign Up</Link>
            <Link to="" className="signin-button nav-button" onClick={() => openModal('signin')}>Sign In</Link>
        </div>
    );

    const profileDropdown = () => (
        
        <ul className="profile-dropdown">
            <li >
                <a href="#">Hi {currentUser.id}</a>
                <ul>
                    <li><a href="#">My Profile</a></li>
                    <li><a href="#">My Dining History</a></li>
                    <li><a href="#">My Saved Restaurants</a></li>
                    <li><button onClick={ () => logout() }>Sign Out</button></li>
                </ul>
            </li>
        </ul>
    );
    
    return (
        currentUser ? profileDropdown() : sessionButtons()

    );

}

export default Home;