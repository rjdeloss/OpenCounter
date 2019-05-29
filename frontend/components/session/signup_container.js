import { connect } from 'react-redux';
import { signup } from '../../actions/session_action';
import Signup from './signup';

const msp = state => {
    return ({
        // errors: state.errors
    });
}

const mdp = dispatch => ({
    signup: formUser => dispatch(signup(formUser))
})


export default connect(null, mdp)(Signup);