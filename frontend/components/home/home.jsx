import React from 'react';
import { Route } from 'react-router-dom';
import RestaurantIndexContainer from '../restaurants/index/restaurant_index_container';

const Home = () => {
    return (
        <>
    <header>
        {/* THIS WILL GO INTO IT'S OWN CONTAINER NAMED HOME */}
        <div className="reservation-home-container">
            <div className="reservation-form-container">
                <h1 className="reservation-form-header">Find your table for any occasion</h1>
                <div className="reservation-form-holder">
                    <form className="reservation-form">
                        <section className="reservation-inputs">
                            <div className="reservation-input-container">
                                <div className="reservation-form-icon-decoration">
                                    <i className="material-icons">calendar_today</i>
                                </div>
                                    <input className="reservation-form-input-field" type="date" />
                                </div>
                                <div className="reservation-input-container">
                                    <div className="reservation-form-icon-decoration">
                                        <i className="material-icons">access_time</i>
                                    </div>
                                    <select className="reservation-form-input-field" >
                                        <option value="7:00 PM">7:00 PM</option>
                                        <option value="7:00 PM">8:00 PM</option>
                                        <option value="7:00 PM">9:00 PM</option>
                                        <option value="7:00 PM">10:00 PM</option>
                                        <option value="7:00 PM">11:00 PM</option>
                                    </select>
                                </div>
                                <div className="reservation-input-container">
                                    <div className="reservation-form-icon-decoration">
                                        <i className="material-icons">person_outlined</i>
                                    </div>
                                    <select className="reservation-form-input-field">
                                        <option value="1 person">1 person</option>
                                        <option value="2 person">2 person</option>
                                    </select>
                                </div>         
                            </section>
                            <div className="reservation-search-input">
                                <div className="reservation-form-icon-decoration">
                                    <i className="material-icons">search</i>
                                </div>
                                <input className="reservation-search-input-field" type="text" placeholder="Manhattan" />
                            </div>
                            <div className="reservation-submit-input">
                                <input className="reservation-submit-input" type="submit" value="Let's go" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </header>
        <main>
            <div className="page-main-content">
                <div className="page-content-column">
                    <div className="page-main-section">
                        <div className="page-main-section-item">
                            <h2>Popular restaurants in Manhattan</h2>
                            <section className="page-main-restaurant-cuisines">
                                {/* <div className="page-main-restaurant-cuisine-list"> */}
                                <Route exact path="/" component={RestaurantIndexContainer} />
                            </section>
                        </div>
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
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
)}

export default Home;