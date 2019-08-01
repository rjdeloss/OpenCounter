import { merge } from 'lodash';
import { RECEIVE_RESTAURANTS, RECEIVE_RESTAURANT } from '../actions/restaurant_action';

const restaurantsReducer = (state ={}, action ) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_RESTAURANTS:
            return action.restaurants; 
        case RECEIVE_RESTAURANT: 
        debugger
            return action.restaurant;
            // const newRestaurant = { [action.restaurant.id]: action.restaurant };
            // return merge({}, state, newRestaurant);
        default: 
            return state; 
    }
}

export default restaurantsReducer;