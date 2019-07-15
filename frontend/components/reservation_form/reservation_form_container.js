import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReservationForm from './reservation_form';
import { createReservation, deleteReservation } from '../../actions/reservation_action';

const msp = (state, ownProps) => {
    const restaurants = Object.values(state.entities.restaurants)
    return ({
        restaurants,
        errors: errors.reservation, 
    })
}

const mdp = dispatch => ({
    createReservation: reservation => dispatch(createReservation(reservation)), 
    deleteReservation: id => dispatch(deleteReservation(id))
});

export default withRouter(connect(msp, mdp)(ReservationForm));