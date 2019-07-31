import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReservationForm from './reservation_form';
import { openModal } from '../../actions/modal_action';
import { createReservation, deleteReservation, clearReservationConfirmation } from '../../actions/reservation_action';

const msp = (state, ownProps) => {
    debugger
    return ({
        restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
        userId: state.session.currentUser,
        errors: state.errors.reservation, 
        reservation: state.entities.reservation, 
        confirmation: state.ui.reservation.confirmation
    })
}

const mdp = dispatch => ({
    createReservation: reservation => dispatch(createReservation(reservation)), 
    deleteReservation: id => dispatch(deleteReservation(id)), 
    clearReservationConfirmation: () => dispatch(clearReservationConfirmation()),
    openLogin: () => dispatch(openModal("signin"))
});

export default withRouter(connect(msp, mdp)(ReservationForm));