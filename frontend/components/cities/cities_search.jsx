import React from 'react';
import { withRouter } from 'react-router-dom';

const CityIndexItem = props => {
    debugger
    const city = props.city;
    const background = props.backgrounds;

    const handleClick = () => {
        props.history.push(`/restaurants/search?search=${city.toLowerCase()}`);
        props.searchRestaurants(city);
    }

    return (
        <div className="main-page-cities" onClick={handleClick}>
            <div className={`${background} city-content`} >
                <h3>{city}</h3>
            </div>
        </div>
    )
}
export default withRouter(CityIndexItem);