import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_action';
import { merge } from 'lodash';

const _nullSession = Object.freeze({
    currentUser: null
})

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, {currentUser: action.currentUser.id});
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default: 
            return state;    
    }
}

export default sessionReducer; 