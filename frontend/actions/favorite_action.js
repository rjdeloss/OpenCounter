import * as FavoriteApiUtil from '../util/favorite_api_util';

export const RECEIVE_FAVORITES = 'RECEIVE_FAVORITES';
export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';


export const receiveFavorites = favorites => ({
    type: RECEIVE_FAVORITES, 
    favorites
})

export const receiveFavorite = favorite => ({
    type: RECEIVE_FAVORITE, 
    favorite
})

export const removeFavorite = id => ({
    type: REMOVE_FAVORITE, 
    id
})

export const fetchFavorites = favorites => dispatch => (
    FavoriteApiUtil.fetchFavorites(favorites).then(favorites => dispatch(receiveFavorites(favorites)))
)

export const fetchFavorite = id => dispatch => (
    FavoriteApiUtil.fetchFavorite(id).then(favorite => dispatch(receiveFavorite(favorite)))
)

export const createFavorite = favorite => dispatch => (
    FavoriteApiUtil.createFavorite(favorite).then(favorite => dispatch(receiveFavorite(favorite)))
)

export const deleteFavorite = id => dispatch => (
    FavoriteApiUtil.deleteFavorite(id).then(favorite=> dispatch(removeFavorite(favorite)))
)