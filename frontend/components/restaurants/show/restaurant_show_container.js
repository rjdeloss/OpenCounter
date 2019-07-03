import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { fetchRestaurant } from '../../../actions/restaurant_action';
import RestaurantShow from './restaurant_show.jsx';


const msp = ( state, ownProps) => {
    const restaurantId = ownProps.match.params.restaurantId; 
    const restaurant = state.entities.restaurants[restaurantId];
    return {
        restaurantId,
        restaurant
    }
}

const mdp = dispatch => ({
    fetchRestaurant: id => dispatch(fetchRestaurant(id))
})

export default withRouter(connect(msp,mdp)(RestaurantShow));