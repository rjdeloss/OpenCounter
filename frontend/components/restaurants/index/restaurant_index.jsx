import React, { useEffect } from 'react';
// import RestaurantIndexContainer from './restaurant_index_container';
import RestaurantIndexItem from './restaurant_index_item';

const RestaurantsIndex = (props) => {

    const restaurants = props.restaurants.map(restaurant => (
        <RestaurantIndexItem key={restaurant.id} restaurant={restaurant} />
    ));
    location.href.includes('restaurants/search') ? 
        useEffect(()=> { props.searchRestaurants(location.href.split("=")[1]);}, []) :
        useEffect(()=> { props.fetchRestaurants(); }, []);

    return (
        <>
            {restaurants}
        </>
    )
    
}

export default RestaurantsIndex;