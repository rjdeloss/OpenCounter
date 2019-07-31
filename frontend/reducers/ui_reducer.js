import { combineReducers } from 'redux';
import modal from './modal_reducer';
import reservation from './reservations_reducer';

export default combineReducers({
    modal, 
    reservation
});
