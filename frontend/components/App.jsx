import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { Auth, AuthRoute } from '../util/route_utils';

import Modal from './modal/modal';
import NavBar from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';


const App = () => (
    <div>
        <Modal />
        <header>
            <NavBar />
        </header>
    </div>
);

export default App;