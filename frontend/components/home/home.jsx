import React from 'react';
import { Route } from 'react-router-dom';
import RestaurantIndexContainer from '../restaurants/index/restaurant_index_container';
import CuisineIndexContainer from '../cuisines/cuisine_index_container';
import CityIndexContainer from '../cities/city_index_container';
import Search from '../search/search_container';
import Carousel from '../carousel/carousel';
import Featured from '../featured/featured';

const Home = () => {
    const slider = (element) => {
        
    }
    return (
        <>
    <div>
        <div className="reservation-home-container">
            <div className="reservation-form-container">
                <h1 className="reservation-form-header">Find your table for any occasion</h1>
                <Search />
            </div>
        </div>
    </div>
            <main>
            {/* <div className="page-main-content"> */}
                {/* <div className="page-content-column"> */}
                <div className="page-main-section">
                    <Carousel id={{id:"restaurant"}} title="Popular restaurants in Manhattan" component={RestaurantIndexContainer}></Carousel>
                    <Carousel id={{id:"cuisine"}} title="Top Cuisines Near You" component={CuisineIndexContainer}></Carousel>
                    <Featured title="Featured Areas" component={CityIndexContainer}></Featured>
                    </div>
                {/* </div> */}
            {/* </div> */}
        </main>
        </>
)}

export default Home;