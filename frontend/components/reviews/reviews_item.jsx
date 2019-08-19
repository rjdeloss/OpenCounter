import React from 'react'; 
import moment from 'moment';

const ReviewItem = props => {
    
    const review = props.review;
    let noStars = _.times(5 - review.overall_rating, (i) => {
        return (<i key={i + 1 + review.overall_rating} className="material-icons star-grey">star</i>)
    });
    let stars = _.times(review.overall_rating, (i) => {
        return (<i key={i} className="material-icons red">star</i>)
    });
    let initials = review.author.split(' ').map(name => (
        name[0]
    )).join('')

    let userName = review.author.split(' '); 
        userName = userName[0]+userName[1][0];


    const color = props.color;

    return (
        <div className="reviews-item">
            <div className="reviews-user">
               <div className="reviews-user-profile-initials" style={{"backgroundColor": `${color}`}}>
                   <span>{initials}</span>
               </div>
               <div className="reviews-user-name">
                    <span>{userName}</span>
               </div>
            </div>
            <div className="reviews-content">
                <div className="reviews-rating-header">
                    <span>{stars}{noStars}</span><p className="reviews-creation-date">·&nbsp;&nbsp;&nbsp;Dined on {moment(review.created_at).format('LL')}</p>
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