import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewsForm from './reviews_form';
import { openModal } from '../../actions/modal_action';
import { createReview, clearReviewErrors } from '../../actions/review_action';
import { fetchRestaurant } from '../../actions/restaurant_action';


const msp = (state, ownProps) => {
    const formType = "Create Review"
    debugger
    return ({
        userId: state.session.currentUser,
        errors: state.errors.reviews, 
        restaurant: state.entities.restaurants[ownProps.location.pathname.slice(13)],
        formType
    })

    }

const mdp = dispatch => ({
    fetchRestaurant: id => dispatch(fetchRestaurant(id)),
    createReview: review => dispatch(createReview(review)),
    clearReviewErrors: () => dispatch(clearReviewErrors()),
    newReview: () => dispatch(openModal("newReview"))
})

export default withRouter(connect(msp,mdp)(ReviewsForm));