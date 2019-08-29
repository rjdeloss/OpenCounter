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

    const backgrounds = [
        "city-new-york",
        "city-chicago",
        "city-los-angeles",
        "city-san-francisco",
        "city-miami",
        "city-las-vegas"
    ]




    const cityItems = cities.map((city,i) => {
        let restaurantCount = props.restaurants.filter(restaurant => restaurant.city === city).length

        return (
        <CityIndexItem key={i} 
            city={city} 
            searchRestaurants={props.searchRestaurants}
            backgrounds={backgrounds[i]} count={restaurantCount} />
    )});

    // useEffect(() => { props.fetchCuisines(); }, []);

    return (
        <>
            {cityItems}
        </>
    )
}

export default CityIndex;