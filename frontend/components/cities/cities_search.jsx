import React from 'react';
import { withRouter } from 'react-router-dom';

const CityIndexItem = props => {
    const city = props.city;
    const background = props.backgrounds;

    const handleClick = () => {
        props.history.push(`/restaurants/search?search=${city.toLowerCase()}`);
        props.searchRestaurants(city);
    }

    return (
        <div className="page-main-cities" onClick={handleClick}>
            <div className={`${background} city-content`} >
                <h2 className="city-text">{city}</h2>
                <p>{props.count} restaurants</p>
            </div>
        </div>
    )
}
export default withRouter(CityIndexItem);