import React from 'react';
import ReviewItem from './reviews_item'

const ReviewsIndex = (props) => {
    const currentUser = props.currentUser;
    const loggedIn = props.loggedIn;
    const userColor = ['#d86441', '#df4e96', '#bb6acd', '#6c8ae4']
    let reviews = Object.values(props.reviews)
        
    if (reviews.length) {
            reviews = reviews.map((review, i) => {
                const currentColor = userColor[Math.floor(Math.random() * 4)]
                return(
                    <ReviewItem key={ i } review={ review } color={currentColor} currentUser={currentUser} loggedIn={loggedIn} deleteReview={props.deleteReview} />
                )
            });
            return (
                <section className="reviews-index-container">
                    { reviews }
                </section>
            )
        } else {
            return null
        }

}

export default ReviewsIndex;