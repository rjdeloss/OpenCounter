import * as ReservationApiUtil from '../util/reservation_api_util';

export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';
export const RECEIVE_RESERVATION_ERRORS = 'RECEIVE_RESERVATION_ERRORS';

export const receiveReservation = reservation => ({
    type: RECEIVE_RESERVATION, 
    reservation
})

export const removeReservation = id => ({
    type: REMOVE_RESERVATION, 
    id
})

export const receiveReservationErrors = errors =>  ({
    type: RECEIVE_RESERVATION_ERRORS, 
    errors
})

export const createReservation = reservation => dispatch => (
    ReservationApiUtil.createReservation(reservation).then(reservation => dispatch(createReservation(reservation)))
)

export const deleteReservation = id => dispatch => (
    ReservationApiUtil.deleteReservation(id).then(reservation => dispatch(removeReservation(reservation)))
)