import React from 'react'; 
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { searchRestaurants } from '../../actions/restaurant_action'; 
import Search from './search';

const msp = (state, ownProps) => {
    const restaurants = Object.values(state.entities.restaurants)
    return {
        restaurants
    }
}

const mdp = dispatch => {
    debugger
    return {
        searchRestaurants: search => dispatch(searchRestaurants(search))
    }
}

export default withRouter(connect(msp, mdp,)(Search))