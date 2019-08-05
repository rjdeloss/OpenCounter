import { merge } from 'lodash';
import { RECEIVE_RESTAURANT } from '../actions/restaurant_action';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_action';

const reviewsReducer = (state ={}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_RESTAURANT: 
            return action.reviews
        case RECEIVE_REVIEW: 
            const newReview = {[action.review.id]: action.review.id};
            return merge({}, state, newReview);
        case REMOVE_REVIEW:
            let newState = merge({}, state);
            delete newState[action.review.id];
            return newState;
        default:
            return state;
    }
}

export default reviewsReducer;