import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CityIndex from './city_index';
import { searchRestaurants } from '../../actions/restaurant_action';

const msp = state => {
    return ({

    })
}

const mdp = dispatch => ({
    searchRestaurants: search => dispatch(searchRestaurants(search))
})

export default withRouter(connect(msp, mdp)(CityIndex)); 