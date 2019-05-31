import { connect } from 'react-redux';
import { login } from '../../actions/session_action';
import SessionForm from './session_form';
import { closeModal } from '../../actions/modal_action'

const msp = (state, ownProps) => {
    // console.log(`in msp: ${ownProps}`);
    const formType = "Sign In"
    return ({
        errors: state.errors.session,
        // name: 
        formType
    });
}

const mdp = dispatch => ({

    login: formUser => dispatch(login(formUser)), 
    closeModal: () => dispatch(closeModal())
})


export default connect(msp, mdp)(SessionForm);