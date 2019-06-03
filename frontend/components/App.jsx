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
            <div className="opacity">
            <div className="reservation-home-container">
                <div className="reservation-form-container">
                    <h1 className="reservation-form-header">Find your table for any occasion</h1>
                    <form className="reservation-form-splash">
                        <div className="reservation-inputs">
                            <input className="form-input-item" type="date" name="" id=""/>
                            <select name="" id="">
                                <option value="7:00 PM">7:00 PM</option>
                            </select>
                            <select name="" id="">
                                <option value="2 people">2 people</option>
                            </select>
                        </div>
                        <div className="reservation-search-input">
                            <input className="form-input-item" type="search" name="" placeholder="Manhattan" />
                        </div>
                        <input className="form-input-item" type="submit" value="Let's go"/>
                    </form>
                </div>
            </div>
            </div>
        </header>
    </div>
);

export default App;