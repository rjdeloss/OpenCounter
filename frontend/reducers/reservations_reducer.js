import { merge } from 'lodash'; 
import { RECEIVE_RESERVATION, REMOVE_RESERVATION } from '../actions/reservation_action';

const reservationsReducer = ( state ={}, action ) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_RESERVATION:
            const newReservation = { [action.reservation.id]: action.reservation.id };
            return merge({}, state, newReservation);
        case REMOVE_RESERVATION:
            let newState = merge({}, state); 
            delete newState[action.reservation.id]; 
            return newState;
        default:
            return state;
    }
}

export default reservationsReducer;