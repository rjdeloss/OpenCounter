import React from 'react'; 
import { withRouter } from 'react-router-dom';

const CuisineIndexItem = props => {
    debugger
    const cuisine = props.cuisine.cuisine; 

    return (
        <div className="page-main-restaurant-cuisines">
            <div className="cuisine-content">
                <h3>Best {cuisine}</h3>
                <h3>Restaurants Around </h3>
                <h3>You</h3>
            </div>
        </div>
    )
}

export default withRouter(CuisineIndexItem);