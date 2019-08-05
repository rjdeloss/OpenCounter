import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchRestaurant } from '../../actions/restaurant_action';
// import {ReviewsIndex} from  './reviews_index.jsx';

const msp = state => {

    }

const mdp = dispatch => ({
    fetchRestaurant: id => dispatch(fetchRestaurant(id))
})

// export default withRouter(connect(msp,mdp)(ReviewsIndex));