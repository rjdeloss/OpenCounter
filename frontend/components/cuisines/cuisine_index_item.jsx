import React from 'react'; 
import { withRouter } from 'react-router-dom';

const CuisineIndexItem = props => {
    const cuisine = props.cuisine.cuisine; 
    const bg = props.backgrounds;

    const handleClick = () => {
        props.history.push(`/restaurants/search?search=${cuisine.toLowerCase()}`);
        props.searchRestaurants(cuisine);
    }

    return (
        <div className="page-main-restaurant-cuisines" onClick={handleClick}>
            <div className={`cuisine-content ${bg}`}>
                <h3>Best {cuisine}</h3>
                <h3>Restaurants Around </h3>
                <h3>You</h3>
            </div>
        </div>
    )
}

export default withRouter(CuisineIndexItem);