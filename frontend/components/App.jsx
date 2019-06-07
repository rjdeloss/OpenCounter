import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { Auth, AuthRoute } from '../util/route_utils';

import Modal from './modal/modal';
import NavBar from './nav_bar/nav_bar_container';
import RestaurantIndexContainer from './restaurants/index/restaurant_index_container';
import Home from '../components/home/home_container';
import Show from '../components/restaurants/show/restaurant_show_container';


const App = () => (
    <div className="container">
        <Modal />
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/restaurants/:restaurantId" component={Show} />
        {/* <Route exact path="/restaurant/:restaurantId" component={RestaurantShow} */}
        {/* FOOTER WILL ALSO GO INTO IT'S OWN CONTAINER NAMED FOOTER */}
        <footer >
            <div className="footer-container">
                <div className="footer-container-items">
                    <a href="">LinkedIn</a>
                    <a href="">GitHub</a>
                    {/* <a href="">Personal site</a> */}
                </div>
            </div>  
        </footer>
    </div>

);

export default App;