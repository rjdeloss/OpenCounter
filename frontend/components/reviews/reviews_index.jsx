import React from 'react';
import ReviewItem from './reviews_item'

const ReviewsIndex = (props) => {
    debugger
    const userColor = ['#d86441', '#df4e96', '#bb6acd', '#6c8ae4']

        const reviews = props.reviews.map(review => {
            const currentColor = userColor[Math.floor(Math.random() * 4)]
            return(
                <ReviewItem key={ review.id } review={ review } color={currentColor}/>
            )
        });
        return (
            <section>
                { reviews }
            </section>
        )

}

export default ReviewsIndex;