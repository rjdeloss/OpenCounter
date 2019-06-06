import { connect } from 'react-redux';
import RestaurantIndex from './restaurant_index';
import { fetchRestaurants, fetchRestaurant } from '../../../actions/restaurant_action';


const msp = state => {
    // let restaurants = Object.values(state.entities.restaurants).map(id => state.restaurants[id])
    const restaurants = Object.values(state.entities.restaurants)
    return {
        restaurants
    }
}

const mdp = dispatch => ({
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    fetchRestaurant: id => dispatch(fetchRestaurant(id))
});

export default connect(msp, mdp)(RestaurantIndex);

