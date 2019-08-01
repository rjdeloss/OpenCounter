import * as ReservationApiUtil from '../util/reservation_api_util';

export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';
export const RECEIVE_RESERVATION_ERRORS = 'RECEIVE_RESERVATION_ERRORS';
export const CLEAR_RESERVATION_ERRORS = 'CLEAR_RESERVATION_ERRORS';
export const RECEIVE_RESERVATION_CONFIRMATION = 'RECEIVE_RESERVATION_CONFIRMATION';
export const CLEAR_RESERVATION_CONFIRMATION = 'CLEAR_RESERVATION_CONFIRMATION';

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

export const clearReservationErrors = () => ({
    type: CLEAR_RESERVATION_ERRORS
})

export const receiveReservationConfirmation = () => ({
    type: RECEIVE_RESERVATION_CONFIRMATION
})

export const clearReservationConfirmation = () => ({
    type: CLEAR_RESERVATION_CONFIRMATION
})

export const createReservation = reservation => dispatch => {
    return (
    ReservationApiUtil.createReservation(reservation).then(
        reservation => {
            dispatch(receiveReservationConfirmation());
            dispatch(receiveReservation(reservation));
        },
        errors => dispatch(receiveReservationErrors(errors.responseJSON)))
    )
}

export const deleteReservation = id => dispatch => (
    ReservationApiUtil.deleteReservation(id).then(reservation => dispatch(removeReservation(reservation)))
)