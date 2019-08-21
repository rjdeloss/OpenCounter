import React from 'react';

const ReviewsStats = props => {
    debugger
    const currentUser =  props.currentUser;
    let reviews = Object.values(props.restaurant.reviews);
    let ratings = props.restaurant.overall_ratings;
    let restaurant = props.restaurant;
    let newReview = props.newReview;
    
    let noise = () =>{
        switch(ratings.noise_level){
        case 1:
            return "Quiet"
        case 3: 
            return "Energetic"
        case 2:
        default:
            return "Moderate"
    }}

    let reviewees = reviews.map( review =>{
        return (
            review.user_id
        )
    } )

    let stars = _.times(Math.round(ratings.overall_rating), (i) => {
        return (<i key={i} className="material-icons red">star</i>)
    });

    let noStars = _.times(5 - (Math.round(ratings.overall_rating)), (i) => {
        return (<i key={i} className="material-icons star-grey">star</i>)
    });

    let renderReview = 
        props.loggedIn && !reviewees.includes(currentUser) ? <a className="reviews-add-button" onClick={() => newReview()}>+ Create Review </a> : null;

    const review_numbers = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
    }
  
    for (let i = 0; i < reviews.length; i++) {
        if (Object.keys(review_numbers).includes(reviews[i].overall_rating.toString())) {
            review_numbers[reviews[i].overall_rating] += 1;
        }
    }
    
    let reviews_percentage = Object.values(review_numbers).map((n, i) => {
        let p = (n/ reviews.length) * 100
        return (
            <div key={i + 1} className="reviews-count-container">
                <span >{i + 1}</span>
                <div className="reviews-count-meter">
                    <span style={{width: `${p}%`}}></span>
                </div>
            </div>
        )
    })
    
    return (
        <div className="reviews-stats">
            <h2>What {reviews.length} People Are Saying</h2>
            <h3 className="reviews-stats-header bold-text">Overall ratings and reviews</h3>
            <div className="reviw-stats-container">
                <div className="reviews-stats-content">
                    <p className="">Reviews can only be made by diners who have eaten at this restaurant</p>
                    <div className="reviews-rating-header">
                        <span>{stars}{noStars}</span><p className="reviews-creation-date small">{ratings.overall_rating} based on recent ratings</p>
                    </div>
                    <div className="reviews-stats-overall-container">
                        <div className="reviews-stats-overall-rating border-right">
                            <h3 className="center-text bold-text">{ratings.food_rating}</h3>
                            <p className="reviews-stats-overall-description small">Food</p>
                        </div>
                        <div className="reviews-stats-overall-rating border-right">
                            <h3 className="center-text bold-text">{ratings.service_rating}</h3>
                            <p className="reviews-stats-overall-description small">Service</p>
                        </div>
                        <div className="reviews-stats-overall-rating border-right">
                            <h3 className="center-text bold-text">{ratings.ambiance_rating}</h3>
                            <p className="reviews-stats-overall-description small">Ambiance</p>
                        </div>
                        <div className="reviews-stats-overall-rating">
                            <h3 className="center-text bold-text">{ratings.value_rating}</h3>
                            <p className="reviews-stats-overall-description small">Value</p>
                        </div>
                    </div>
                    <div className="reviews-recommended xsmall">
                        <span><i className="material-icons">equalizer</i></span><p className="grey">&nbsp;&nbsp;Noise&nbsp;·&nbsp;{noise()}</p>
                    </div>
                    <div className="reviews-recommended xsmall">
                        <span><i className="material-icons-outlined">thumb_up</i></span><p className="grey">&nbsp;&nbsp;{restaurant.recommended}% of people would recommend it to a friend</p>
                    </div>
                </div>
                <div className="review-stats-graph-container">
                    <div className="review-stats-graph">
                        { reviews_percentage}
                    </div>
                        { renderReview }
                    {/* <a className="reviews-add-button" onClick={() => newReview()}>+ Create Review </a> */}
                </div>
            </div>
        </div>
    )
}
export default ReviewsStats; 