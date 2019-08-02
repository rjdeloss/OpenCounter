import React from 'react'; 
import moment from 'moment';

const ReviewItem = props => {
    debugger
    const review = props.review;
    let noStars = _.times(5 - review.overall_rating, () => {
        return (<i className="material-icons star-grey">star</i>)
    });
    let stars = _.times(review.overall_rating, () => {
        return (<i className="material-icons red">star</i>)
    });

    const color = props.color;

    return (
        <div className="reviews-item">
            <div className="reviews-user">
               <div className="reviews-user-profile-initials" style={{"backgroundColor": `${color}`}}>
                   <span>OT</span>
               </div>
               <div className="reviews-user-name">

               </div>
            </div>
            <div className="reviews-content">
                <div className="reviews-rating-header">
                    <span>{stars}{noStars}</span><span className="reviews-creation-date">Dined on {moment(review.created_at).format('LL')}</span>
                </div>
                <div className="reviews-rating-container">
                    <span className="rating-name">Overall</span>
                    <span className="rating-number">{review.overall_rating}</span>
                    <span className="rating-name">· Food</span>
                    <span className="rating-number">{review.food_rating}</span>
                    <span className="rating-name"> · Service</span>
                    <span className="rating-number">{review.service_rating}</span>
                    <span className="rating-name">· Ambience</span>
                    <span className="rating-number">{review.ambiance_rating}</span>
                </div>
                <p>{review.body}</p>

            </div>

        </div>
    )
}

export default ReviewItem;