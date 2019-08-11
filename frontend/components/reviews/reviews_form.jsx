import React from 'react';
import Rating from 'react-rating';
import moment from 'moment';

class ReviewsForm extends React.Component {
    constructor(props){
        super(props); 
        debugger
        this.state = {
            food_rating: 0,
            service_rating: 0,
            ambiance_rating: 0, 
            value_rating: 0,
            noise_level: 0,
            recommended: 0,
            body: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }    
    
    componentWillUnmount(){
        this.props.clearReviewsErrors;
    }

    handleSubmit(e) {
        e.preventDefault();
        const { restaurant, userId } = this.props;
        const { food_rating, service_rating, ambiance_rating, value_rating, noise_level, body } = this.state;

        let overall_rating = Math.round((food_rating + service_rating + ambiance_rating + value_rating) / 4);

        const review = {
            userId,
            restaurant_id: restaurant.id,
            overall_rating,
            food_rating, 
            service_rating, 
            ambiance_rating, 
            value_rating, 
            noise_level, 
            body
        }
        this.props.createReview(review).then(this.props.closeModal);
        this.props.fetchRestaurant(restaurant.id);
    }

    handleRadioInput(field) {
         return value => this.setState({ [field]: value })
    }

    handleInput(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    renderErrors() {
        const errors = Object.values(this.props.errors);

        if (errors.length) {
            const errorList = errors.map((error, i) => {
                return (
                    <li className="errors" key={i} >{error}</li>
                )
            });

            return (
                <ul className="restaurant-reservation-error-container">
                    {errorList}
                </ul>
            )
        } else {
            return null
        }
    }

    render() {
        
        return (
            <div className="reviews-form-container">
                <h2 className="bold-text">Name, how was your experience at {this.props.restaurant.name}? </h2>
                <span>Dined on {moment(this.props.restaurant.open_time).format('l')}</span>
                <form className="reviews-form" onSubmit={this.handleSubmit}>
                    <div className="reviews-form-radio-input">
                        <h3 className="bold-text center-text pad-text">Rate your dining experience (required)</h3>
                        <label className="reviews-form-input-container">Food
                            <div className="reviews-radio-collection">
                                <Rating
                                    onClick={this.handleRadioInput("food_rating")}
                                    initialRating={this.state.food_rating}
                                    emptySymbol={<i className="material-icons grey star-rating">star_outlined</i>}
                                    fullSymbol={<i className="material-icons red">star</i>}
                                />
                            </div>
                        </label>
                        <label className="reviews-form-input-container">Service
                            <div className="reviews-radio-collection">
                                <Rating
                                    onClick={this.handleRadioInput("service_rating")}
                                    initialRating={this.state.service_rating}
                                    emptySymbol={<i className="material-icons grey star-rating">star_outlined</i>}
                                    fullSymbol={<i className="material-icons red">star</i>}
                                />
                            </div>
                        </label>
                        <label className="reviews-form-input-container">Ambience
                            <div className="reviews-radio-collection">
                                <Rating
                                    onClick={this.handleRadioInput("ambiance_rating")}
                                    initialRating={this.state.ambiance_rating}
                                    emptySymbol={<i className="material-icons grey star-rating">star_outlined</i>}
                                    fullSymbol={<i className="material-icons red">star</i>}
                                />
                            </div>
                        </label>
                        <label className="reviews-form-input-container">Value
                            <div className="reviews-radio-collection">
                                <Rating
                                    onClick={this.handleRadioInput("value_rating")}
                                    initialRating={this.state.value_rating}
                                    emptySymbol={<i className="material-icons grey star-rating">star_outlined</i>}
                                    fullSymbol={<i className="material-icons red">star</i>}
                                />
                            </div>
                        </label>
                        <label className="reviews-form-input-container">Noise Level
                            <div className="reviews-radio-collection">
                                <Rating 
                                    stop={3}
                                    onClick={this.handleRadioInput("noise_level")}
                                    initialRating={this.state.noise_level}
                                    emptySymbol={<i className="material-icons grey">star</i>}
                                    fullSymbol={<i className="material-icons red">star</i>}
                                />
                                {/* <input type="radio" name="noise" id="" value="1" />
                                <input type="radio" name="noise" id="" value="2" />
                                <input type="radio" name="noise" id="" value="3" /> */}
                            </div>
                        </label>
                    </div>
                    <h3 className="bold-text center-text pad-text">Would you recommend {this.props.restaurant.name} to a friend?</h3>
                            <div className="reviews-form-noise-input">
                                <input type="radio" name="noise" id="" value="1" onClick={this.handleRadioInput("recommended")}/>Yes
                                <input type="radio" name="noise" id="" value="0" onClick={this.handleRadioInput("recommended")}/>No
                            </div>
                    <h3 className="bold-text center-text pad-text">Write a review</h3>
                    <textarea type="textarea" wrap="soft" rows="10" cols="50" className="textarea" name="body" value={this.state.body} onChange={ this.handleInput("body")}/>

                    <input className="reviews-form-submit" type="submit" value="Submit your Review" name="" id=""/>
                </form>
            </div>
        )
    }
}

export default ReviewsForm;