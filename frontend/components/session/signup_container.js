import { connect } from 'react-redux';
import { signup } from '../../actions/session_action';
import SessionForm from './session_form';

const msp = state => {
    const formType = "Create Account"
    return ({
        errors: state.errors.session,
        formType
    });
}

const mdp = dispatch => ({
    signup: formUser => dispatch(signup(formUser))
})


export default connect(msp, mdp)(SessionForm);