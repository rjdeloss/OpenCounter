import { connect } from 'react-redux'; 
import { createFavorite, deleteFavorite } from '../../actions/favorite_action';
import { openModal } from '../../actions/modal_action';
import FavoriteButton from './favorites';

const msp = (state, ownProps) => {
    const loggedIn = Boolean(state.session.currentUser);
    const currentUser = state.session.currentUser;
    const favorites = Object.keys(state.entities.users[state.session.currentUser].favorites).length ?
        state.entities.users[state.session.currentUser].favorites : { favorites: {} }

    return {
        loggedIn, 
        currentUser,
        favorites,
    }
}

const mdp = dispatch => ({
    createFavorite: favorite => dispatch(createFavorite(favorite)), 
    deleteFavorite: id => dispatch(deleteFavorite(id)),
    openLogin: () => dispatch(openModal("signin"))
})

export default connect(msp,mdp)(FavoriteButton);