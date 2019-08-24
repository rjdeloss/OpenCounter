import { merge } from 'lodash'; 
import { RECEIVE_FAVORITES, RECEIVE_FAVORITE, REMOVE_FAVORITE } from '../actions/favorite_action';

const favoritesReducer = (state={}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_FAVORITES:
            return action.favorites;
        case RECEIVE_FAVORITE:
            let newState = merge({}, state);
            let favorite = action.favorite.favorite; 
            const newFavorite = { [favorite.id]: favorite }
            return merge({}, state, newFavorite);
        case REMOVE_FAVORITE:
            newState = merge({}, state); 
            delete newState[action.id];
            return newState; 
        default:
            return state;
    }
}

export default favoritesReducer;