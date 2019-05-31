import { connect } from 'react-redux';
import { signup } from '../../actions/session_action';
import SessionForm from './session_form';
import { closeModal } from '../../actions/modal_action';

const msp = state => {
    const formType = "Create Account"
    return ({
        errors: state.errors.session,
        formType
    });
}

const mdp = dispatch => ({
    signup: formUser => dispatch(signup(formUser)),
    closeModal: () => dispatch(closeModal())
})


export default connect(msp, mdp)(SessionForm);