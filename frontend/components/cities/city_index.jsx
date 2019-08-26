import React, {useEffect} from 'react';
import CityIndexItem from './cities_search';

const CityIndex = props => {
    const cities = [
        "New York Area",
        "Chicago",
        "Los Angeles",
        "San Francisco",
        "Miami",
        "Las Vegas"
    ]

    const cityItems = cities.map((city,i) => (
        <CityIndexItem key={i} city={city} searchRestaurants={props.searchRestaurants} />
    ));

    // useEffect(() => { props.fetchCuisines(); }, []);

    return (
        <>
            {cityItems}
        </>
    )
}

export default CityIndex;