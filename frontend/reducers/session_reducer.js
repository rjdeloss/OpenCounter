import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';
import { merge } from 'lodash';

const _nullUser = ({
    currentUser: null
})

const sessionReducer = (action, state = _nullUser) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, action.currentUser.id);
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default: 
            return state;    
    }
}

export default sessionReducer; 