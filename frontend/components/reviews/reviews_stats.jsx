import React from 'react';

const ReviewsStats = props => {
    let reviews = Object.values(props.reviews);
    
    let stars = _.times(4, (i) => {
        return (<i key={i} className="material-icons red">star</i>)
    });

    let noStars = _.times(1, (i) => {
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
                        <span>{stars}{noStars}</span><p className="reviews-creation-date small">4.0 based on recent ratings</p>
                    </div>
                    <div className="reviews-stats-overall-container">
                        <div className="reviews-stats-overall-rating border-right">
                            <h3 className="center-text bold-text">4.0</h3>
                            <p className="reviews-stats-overall-description small">Food</p>
                        </div>
                        <div className="reviews-stats-overall-rating border-right">
                            <h3 className="center-text bold-text">4.0</h3>
                            <p className="reviews-stats-overall-description small">Service</p>
                        </div>
                        <div className="reviews-stats-overall-rating border-right">
                            <h3 className="center-text bold-text">4.0</h3>
                            <p className="reviews-stats-overall-description small">Ambiance</p>
                        </div>
                        <div className="reviews-stats-overall-rating">
                            <h3 className="center-text bold-text">4.0</h3>
                            <p className="reviews-stats-overall-description small">Value</p>
                        </div>
                    </div>
                    <div className="reviews-recommended xsmall">
                        <span><i className="material-icons">equalizer</i></span><p className="grey">&nbsp;&nbsp;Noise&nbsp;·&nbsp;Moderate</p>
                    </div>
                    <div className="reviews-recommended xsmall">
                        <span><i className="material-icons-outlined">thumb_up</i></span><p className="grey">&nbsp;&nbsp;86% of people would recommend it to a friend</p>
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