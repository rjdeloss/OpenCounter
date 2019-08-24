import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import restaurantsReducer from './restaurants_reducer';
import reservationsReducer from './reservations_reducer';
import reviewsReducer from './reviews_reducer';
import cuisinesReduder from './cuisines_reducer';
import favoritesReducer from './favorites_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer, 
    reviews: reviewsReducer,
    cuisines: cuisinesReduder,
    restaurants: restaurantsReducer, 
    reservations: reservationsReducer, 
    favorites: favoritesReducer,
});

export default entitiesReducer;