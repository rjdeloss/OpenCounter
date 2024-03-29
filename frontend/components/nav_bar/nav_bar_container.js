import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_action';

const msp = state => ({
    currentUser: state.session.currentUser
});

const mdp = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(msp, mdp)(NavBar);
