import React from 'react';
import { Link } from 'react-router-dom';

const Session = ({currentUser, logout, openModal}) => {
    const sessionButtons = () => (
        <div className="session-container">    
            <Link to="" className="signup-button nav-button" onClick={() => openModal('signup')}>Sign Up</Link>
            <Link to="" className="signin-button nav-button" onClick={() => openModal('signin')}>Sign In</Link>
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

    // const reservationContainer =() => 
    // {   
    //     let ppl = [];
    //     for (let i = 2; i < 20; i++) {
    //         ppl.push(i)
    //     }

    //     ppl.map(i => {
    //         {"${i} people"}
    //     })
        
    //     return (

    // )}
    
    return (
        currentUser ? profileDropdown() : sessionButtons()

        
    );

}

export default Session;