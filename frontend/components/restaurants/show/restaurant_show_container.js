import { connect } from 'react-redux';
import { fetchRestaurant } from '../../../actions/restaurant_action';
import RestaurantShow from './restaurant_show.jsx';

const msp = ( state, ownProps) => {
    const restaurantId = ownProps.match.params.restaurantId; 
    const restaurant = state.entities.restaurants[restaurantId];

    return {
        restaurant
    }
}

const mdp = dispatch => ({
    fetchRestaurant: id => dispatch(fetchRestaurant(id))
})

export default connect(msp,mdp)(RestaurantShow);