import React from 'react';
import { Route } from 'react-router-dom';
import RestaurantIndexContainer from '../restaurants/index/restaurant_index_container';
import Search from '../search/search_container';

const Home = () => {
    return (
        <>
    <header>
        <div className="reservation-home-container">
            <div className="reservation-form-container">
                <h1 className="reservation-form-header">Find your table for any occasion</h1>
                <div className="reservation-form-holder">
                    <Search />
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
                            <section className="page-main-restaurant-carousel">
                                {/* <div className="page-main-restaurant-cuisine-list"> */}
                                <Route exact path="/" component={RestaurantIndexContainer} />
                            </section>
                        </div>
                        <div className="page-main-section-item">
                            <h2>Top Cuisines Near You</h2>
                                <section className="page-main-restaurant-carousel">
                                <div className="page-main-restaurant-cuisines">
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