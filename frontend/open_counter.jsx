import React from 'react'; 
import ReactDOM from 'react-dom';
import configureStore  from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        };
    }
    ReactDOM.render( <Root store={store} />, root);
});