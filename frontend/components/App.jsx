import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom'


import SignupContainer from './session/signup_container';


const App = () => (
    <div>
        <h1>Welcome to OpenCounter!</h1>
        <Route path="/signup" component={SignupContainer} />
    </div>
);

export default App;