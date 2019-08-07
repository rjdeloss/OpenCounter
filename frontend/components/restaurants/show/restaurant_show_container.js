import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { fetchRestaurant } from '../../../actions/restaurant_action';
import RestaurantShow from './restaurant_show.jsx';
import { openModal } from '../../../actions/modal_action';


const msp = ( state, ownProps) => {
    const restaurantId = ownProps.match.params.restaurantId; 
    const restaurant = Object.keys(state.entities.restaurants).length ? state.entities.restaurants[restaurantId]: { overall_ratings: [], reviews: [] };
    return {
        restaurantId,
        restaurant
    }
}

const mdp = dispatch => ({
    fetchRestaurant: id => dispatch(fetchRestaurant(id)), 
    newReview: () => dispatch(openModal("newReview"))
})

export default withRouter(connect(msp,mdp)(RestaurantShow));