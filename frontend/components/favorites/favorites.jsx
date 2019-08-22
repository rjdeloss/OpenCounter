import React from 'react';

const FavoriteButton = props => {
    debugger
    const currentUser = props.currentUser; 
    const restaurant = props.restaurant;
    

    // let renderFavoriteButton = 
    //     if (props.loggedIn) {
    //         reutnr 
    //     }

    return (
        <div className="favorite-button">
            <i className="material-icons">bookmark_border</i>
            <p>Save this restaurant</p>
        </div>
    )
}
export default FavoriteButton;