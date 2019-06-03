import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { Auth, AuthRoute } from '../util/route_utils';

import Modal from './modal/modal';
import NavBar from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';


const App = () => (
    <div>
        <Modal />
        <header> 
            <NavBar />
            {/* THIS WILL GO INTO IT'S OWN CONTAINER NAMED HOME */}
            <div className="reservation-home-container">
                <div className="reservation-form-container">
                    <h1 className="reservation-form-header">Find your table for any occasion</h1>
                    <form className="reservation-form-splash">
                        <div className="reservation-inputs">
                            <input className="form-input-item" type="date" name="" id=""/>
                            
                            <div className="form-selection-item">
                                <select name="" id="">
                                    <option value="7:00 PM">7:00 PM</option>
                                </select>
                            </div>
                            <div className="form-selection-item">
                                <select name="" id="">
                                    <option value="2 people">2 people</option>
                                </select>
                            </div>
                        </div>
                        <div className="reservation-search-input">
                            <input className="form-input-item" type="search" name="" placeholder="Manhattan" />
                        </div>
                        <div className="reservation-submit-input" >
                            <input className="form-input-item" type="submit" value="Let's go"/>
                        </div>
                    </form>
                </div>
            </div>
        </header>
        {/* MAIN PAGE CONTENT WILL GO HERE  */}
        <main>
            <div className="page-main-content">
                <div className="page-content-column">
                    <div className="page-main-section">
                        <div className="page-main-section-item">
                            <h2>Top Cuisines Near You</h2>
                            <section className="page-main-restaurant-cuisines">
                                <div className="page-main-restaurant-cuisine-list">
                                   <div className="cuisine-content">
                                        <h3>Best Cuisine</h3>
                                            <h3>Restaurants Around </h3>
                                            <h3>You</h3>
                                    </div>
                                   <div className="cuisine-content">
                                        <h3>Best Cuisine</h3>
                                            <h3>Restaurants Around </h3>
                                            <h3>You</h3>
                                    </div>
                                   <div className="cuisine-content">
                                        <h3>Best Cuisine</h3>
                                            <h3>Restaurants Around </h3>
                                            <h3>You</h3>
                                    </div>
                                   <div className="cuisine-content">
                                        <h3>Best Cuisine</h3>
                                            <h3>Restaurants Around </h3>
                                            <h3>You</h3>
                                    </div>
                                   <div className="cuisine-content">
                                        <h3>Best Cuisine</h3>
                                            <h3>Restaurants Around </h3>
                                            <h3>You</h3>
                                    </div>

                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        {/* FOOTER WILL ALSO GO INTO IT'S OWN CONTAINER NAMED FOOTER */}
        <footer >
            <div className="footer-container">
                <div className="footer-container-items">
                    <a href="">LinkedIn</a>
                    <a href="">GitHub</a>
                    <a href="">Personal site</a>
                </div>
            </div>  
        </footer>
    </div>

);

export default App;