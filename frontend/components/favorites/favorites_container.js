import { connect } from 'react-redux'; 
import { createFavorite, deleteFavorite } from '../../actions/favorite_action';
import FavoriteButton from './favorites';

const msp = (state, ownProps) => {
    debugger
    const loggedIn = Boolean(state.session.currentUser);
    const currentUser = state.session.currentUser;
    return {
        loggedIn, 
        currentUser, 
    }
}

const mdp = dispatch => ({
    createFavorite: favorite => dispatch(createFavorite(favorite)), 
    deleteFavorite: id => dispatch(deleteFavorite(id))
})

export default connect(msp,mdp)(FavoriteButton);