import { connect } from 'react-redux';
import { logout } from '../../actions/session_action';
import { openModal } from '../../actions/modal_action';
import Home from './home';

const msp = state => ({
    currentUser: state.session.currentUser
})

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
})


export default connect(msp, mdp)(Home);