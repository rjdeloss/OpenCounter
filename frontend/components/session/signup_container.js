import { connect } from 'react-redux';
import { signup, receiveErrors, clearSessionErrors } from '../../actions/session_action';
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
    action: formUser => dispatch(signup(formUser)),
    closeModal: () => dispatch(closeModal()), 
    receiveErrors: errors => dispatch(receiveErrors(errors)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
})


export default connect(msp, mdp)(SessionForm);