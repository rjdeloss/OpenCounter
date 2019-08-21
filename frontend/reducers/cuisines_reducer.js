import { RECEIVE_CUISINES } from '../actions/cuisine_action';

const cuisineReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CUISINES: 
            return action.cuisines; 
        default:
            return state;
    }
}

export default cuisineReducer;