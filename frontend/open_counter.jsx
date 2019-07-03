import React from 'react'; 
import ReactDOM from 'react-dom';
import configureStore  from './store/store';
import Root from './components/root';
import { fetchRestaurants } from './actions/restaurant_action';
import { searchRestaurants } from './util/restaurant_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore(preloadedState);

    window.searchRestaurants = searchRestaurants; 
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    window.fetchRestaurants = fetchRestaurants;

    let preloadedState = {};
    if (window.currentUser) {
        preloadedState = {
            entities: {users: {
                [currentUser.id]: currentUser
                }
            },
            session: {
                currentUser: window.currentUser.id
            }
        };
    }
    ReactDOM.render( <Root store={store} />, root);
});