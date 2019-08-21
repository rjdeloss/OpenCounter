import { merge } from 'lodash';
import { RECEIVE_RESTAURANTS, RECEIVE_RESTAURANT } from '../actions/restaurant_action';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_action';

const restaurantsReducer = (state ={}, action ) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_RESTAURANTS:
            return action.restaurants; 
        case RECEIVE_RESTAURANT: 
            const newRestaurant = { [action.restaurant.id]: action.restaurant}
            return merge({}, state, newRestaurant)
        case RECEIVE_REVIEW:
            let newState = merge({}, state);
            let review = action.review.review;
            newState[review.restaurant_id].reviews[review.id] = review
            // const newReview = { [action.restaurant.reviews.id]: action.restaurant.review}
            return newState;
        case REMOVE_REVIEW:
            debugger
            newState = merge({}, state);
            review = action.id.review;
            delete newState[review.restaurant_id].reviews[review.id];
            return newState;
        default: 
            return state; 
    }
}

export default restaurantsReducer;