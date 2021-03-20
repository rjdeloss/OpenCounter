import React from 'react';
import { connect } from 'react-redux';
import Header from './header';

const msp = state => ({
    currentUser: state.session.currentUser
});

const mdp = dispatch => ({

});

export default connect(msp, mdp)(Header);