import React from 'react';

const FavoriteButton = props => {
    // debugger
    const currentUser = props.currentUser; 
    const restaurant = props.restaurant;
    const favorites = props.favorites;
    let createFavorite = props.createFavorite;

    // let favoredRestaurants = favorites.map(favorite => favorite.restaurant_id);
    // let favorite = {
    //     user_id: currentUser,
    //     restaurant_id: restaurant.id, 
    // }

    // let favoriteButton = 
    //     !favoredRestaurants.includes(restaurant.id) ? 
    //         <a href="" className="favorite-button" onClick={(e) => {e.preventDefault(); createFavorite(favorite)}}>
    //             <i className="material-icons">bookmark_border</i>
    //             <p>Save this restaurant</p>
    //         </a> :
    //         <a href="" className="favorite-button" onClick={(e) => { e.preventDefault(); deleteFavorite() }}>
    //             <i className="material-icons red">bookmark</i>
    //             <p>Restaurant saved!</p>
    //         </a>;


    // let renderFavoriteButton = 
    //     (props.loggedIn) ? favoriteButton : null;

    return (
        <>
            {/* {renderFavoriteButton} */}
        </>
    )
}
export default FavoriteButton;