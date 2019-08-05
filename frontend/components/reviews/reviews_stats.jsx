import React from 'react';

const ReviewsStats = props => {
    let reviews = Object.values(props.restaurant.reviews);
    let ratings = props.restaurant.overall_ratings;
    let restaurant = props.restaurant
    
    let noise = () =>{
        switch(ratings.noise_level){
        case 1:
            return "Quiet"
        case 3: 
            return "Loud"
        case 2:
        default:
            return "Moderate"
    }}

    let stars = _.times(Math.round(ratings.overall_rating), (i) => {
        return (<i key={i} className="material-icons red">star</i>)
    });

    let noStars = _.times(5 - (Math.round(ratings.overall_rating)), (i) => {
        return (<i key={i} className="material-icons star-grey">star</i>)
    });

    let meterStyle5 = {
        width: '80%'
    }
    let meterStyle4 = {
        width: '60%'
    }
    let meterStyle3 = {
        width: '40%'
    }
    let meterStyle2 = {
        width: '10%'
    }
    let meterStyle1 = {
        width: '5%'
    }

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
                <div className="review-stats-graph">
                    <div className="reviews-count-container">
                        <span >5</span>
                        <div className="reviews-count-meter">
                            <span style={meterStyle5}></span>
                        </div>
                    </div>
                    <div className="reviews-count-container">
                        <span>4</span>
                        <div className="reviews-count-meter">
                            <span style={meterStyle4}></span>
                        </div>
                    </div>
                    <div className="reviews-count-container">
                        <span>3</span>
                        <div className="reviews-count-meter">
                            <span style={meterStyle3}></span>
                        </div>
                    </div>
                    <div className="reviews-count-container">
                        <span>2</span>
                        <div className="reviews-count-meter">
                            <span style={meterStyle2}></span>
                        </div>
                    </div>
                    <div className="reviews-count-container">
                        <span>1</span>
                        <div className="reviews-count-meter">
                            <span style={meterStyle1}></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ReviewsStats; 