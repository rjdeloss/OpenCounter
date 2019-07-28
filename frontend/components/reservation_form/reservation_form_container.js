import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReservationForm from './reservation_form';
import { createReservation, deleteReservation } from '../../actions/reservation_action';

const msp = (state, ownProps) => {
    debugger
    return ({
        restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
        userId: state.session.id,
        errors: state.errors.reservation, 
        reservation: state.entities.reservation, 
    })
}

const mdp = dispatch => ({
    createReservation: reservation => dispatch(createReservation(reservation)), 
    deleteReservation: id => dispatch(deleteReservation(id))
});

export default withRouter(connect(msp, mdp)(ReservationForm));