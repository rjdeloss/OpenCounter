import { merge } from 'lodash'; 
import { RECEIVE_RESERVATION, REMOVE_RESERVATION, RECEIVE_RESERVATION_CONFIRMATION, CLEAR_RESERVATION_CONFIRMATION } from '../actions/reservation_action';

const _noConfirmation = Object.freeze({
    confirmation: false
});

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
        case RECEIVE_RESERVATION_CONFIRMATION: 
            return { confirmation: true }; 
        case CLEAR_RESERVATION_CONFIRMATION: 
            return _noConfirmation;
        default:
            return state;
    }
}

export default reservationsReducer;