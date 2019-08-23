import React from 'react';

const FavoriteButton = props => {
    debugger
    const currentUser = props.currentUser; 
    const restaurant = props.restaurant;
    const favorites = props.favorites;
    let createFavorite = props.createFavorite;

    let favorite = {
        user_id: currentUser,
        restaurant_id: restaurant.id, 
    }

    let renderFavoriteButton = () => {
        if (props.loggedIn) {
            
        }

    }
        // props.loggedIn ? 
        // !(props.favorites.includes(restaurant.id)) ?
        // <a href="" className="favorite-button" onClick={(e) => {e.preventDefault(); createFavorite(favorite)}}>
        //     <i className="material-icons">bookmark_border</i>
        //     <p>Save this restaurant</p>
        // </a> : 
        // <a href="" className="favorite-button" onClick={(e) => { e.preventDefault(); deleteFavorite(favorite) }}>
        //     <i className="material-icons red">bookmark</i>
        //     <p>Restaurant saved!</p>
        // </a> : null;

    return (
        <>
            {renderFavoriteButton}
        </>
    )
}
export default FavoriteButton;