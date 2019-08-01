import React from 'react'; 
import ReactDOM from 'react-dom';
import configureStore  from './store/store';
import Root from './components/root';
import { fetchRestaurants } from './actions/restaurant_action';
import { searchRestaurants } from './util/restaurant_api_util';
import { fetchReviews } from './util/review_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
        
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
    delete window.currentUser;
}

const store = configureStore(preloadedState);

window.fetchReviews = fetchReviews
    // window.searchRestaurants = searchRestaurants; 
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    window.fetchRestaurants = fetchRestaurants;

    ReactDOM.render( <Root store={store} />, root);
});