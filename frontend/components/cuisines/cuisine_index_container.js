import { connect } from 'react-redux';
import CuisineIndex from './cuisine_index';
import { fetchCuisines } from '../../actions/cuisine_action';
import { searchRestaurants } from '../../actions/restaurant_action';

const msp = state => {
    const cuisines = Object.values(state.entities.cuisines)
    return {
        cuisines
    }
}

const mdp = dispatch => ({
    fetchCuisines: () => dispatch(fetchCuisines()),
    searchRestaurants: search => dispatch(searchRestaurants(search)),
})

export default connect(msp, mdp)(CuisineIndex);