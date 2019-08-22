import { merge } from 'lodash'; 
import { RECEIVE_FAVORITES, RECEIVE_FAVORITE, REMOVE_FAVORITE } from '../actions/favorite_action';

const favoritesReducer = (state={}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_FAVORITES:
            return action.favorites;
        case RECEIVE_FAVORITE:
            const newFavorite = { [action.favorite.id]: action.favorite }
            return merge({}, state, newFavorite);
        case REMOVE_FAVORITE:
            let newState = merge({}, state); 
            delete newState[action.id];
            return newState; 
        default:
            return state;
    }
}

export default favoritesReducer;