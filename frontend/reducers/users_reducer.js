import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_action';
import { RECEIVE_FAVORITE, REMOVE_FAVORITE } from '../actions/favorite_action';
import { merge } from 'lodash';

export const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { [action.currentUser.id]: action.currentUser,  });
        case RECEIVE_FAVORITE:
            let newState = merge({}, state);
            let favorite = action.favorite.favorite; 
            newState[favorite.user_id].favorites[favorite.id] = favorite;
            return newState
        case REMOVE_FAVORITE:
            newState = merge({}, state);
            favorite = action.id.favorite; 
            delete newState[favorite.user_id].favorites[favorite.id];
            return newState;
        case LOGOUT_CURRENT_USER:
            return {}
        default:
            return state;
    }
}

export default usersReducer;