import * as RestaurantApiUtil from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';

export const receiveRestaurants = restaurants => ({
    type: RECEIVE_RESTAURANTS, 
    restaurants
})

export const receiveRestaurant = ({ restaurant, reviews }) => {
   return ( {type: RECEIVE_RESTAURANT, 
    restaurant, reviews});
}

export const fetchRestaurants = filters => dispatch => (
    RestaurantApiUtil.fetchRestaurants(filters).then(restaurants => dispatch(receiveRestaurants(restaurants)))
)

export const fetchRestaurant = id => dispatch => (
    RestaurantApiUtil.fetchRestaurant(id).then(restaurant => dispatch(receiveRestaurant(restaurant)))
)

export const searchRestaurants = search => dispatch => (
    RestaurantApiUtil.searchRestaurants(search).then(restaurants => dispatch(receiveRestaurants(restaurants)))
)