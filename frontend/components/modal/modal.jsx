import React from 'react';
import { closeModal } from '../../actions/modal_action';
import { connect } from 'react-redux';

import SigninContainer from '../session/signin_container';
import SingupContainer from '../session/signup_container';

const Modal = ({ modal, closeModal }) => {
    if (!modal) null;
    let component; 
    switch (modal) {
        case 'signin':
            component = <SigninContainer />;
            break;
        case 'signup':
            component = <SingupContainer />
            break;
        default: 
            return null;   
    }
    

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick = {e => e.stopPropagation() }>
                {component}
            </div>
        </div>
    );
}

const msp = state => {
    return ({
        modal: state.ui.modal
    })
}

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal())
})


export default connect(msp, mdp)(Modal);