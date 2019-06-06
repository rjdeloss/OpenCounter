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
                <form className="reservation-form-splash">
                    <div className="reservation-inputs">
                        <input className="form-input-item" type="date" name="" id="" />
                        <div className="form-selection-item">
                            <select id="form-selection-item-time">
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
                        <input className="form-input-item" type="submit" value="Let's go" />
                    </div>
                </form>
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