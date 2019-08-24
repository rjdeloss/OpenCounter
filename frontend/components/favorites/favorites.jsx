import React from 'react';

const FavoriteButton = props => {
    const currentUser = props.currentUser; 
    const restaurant = props.restaurant;
    const favorites = Object.values(props.favorites);
    let createFavorite = props.createFavorite;
    let deleteFavorite = props.deleteFavorite;
    let favoriteId = favorites.filter(favorite => favorite.restaurant_id === restaurant.id).length ? 
        favorites.filter(favorite => favorite.restaurant_id === restaurant.id)[0].id : [];

    let favoredRestaurants = favorites.length ? favorites.map(favorite => favorite.restaurant_id) : [];
    let favorite = {
        user_id: currentUser,
        restaurant_id: restaurant.id, 
    }

    let favoriteButton = 
        !favoredRestaurants.includes(restaurant.id) ? 
            <a href="" className="favorite-button" onClick={(e) => {e.preventDefault(); createFavorite(favorite)}}>
                <i className="material-icons">bookmark_border</i>
                <p>Save this restaurant</p>
            </a> :
            <a href="" className="favorite-button" onClick={(e) => { e.preventDefault(); deleteFavorite(favoriteId) }}>
                <i className="material-icons red">bookmark</i>
                <p>Restaurant saved!</p>
            </a>;

    return (
        <>
            {favoriteButton}
        </>
    )
}
export default FavoriteButton;