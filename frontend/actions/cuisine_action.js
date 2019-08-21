import * as CuisineApiUtil from '../util/cuisine_api_util'; 

export const RECEIVE_CUISINES = 'RECEIVE_CUISINES';

export const receiveCuisines = cuisines => ({
    type: RECEIVE_CUISINES, 
    cuisines
})

export const fetchCuisines = cuisines => dispatch => (
    CuisineApiUtil.fetchCuisines(cuisines).then(cuisines => dispatch(receiveCuisines(cuisines)))
)