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
        }
    }    
    
    componentWillUnmount(){
        this.props.clearReviewsErrors;
    }

    handleSubmit(e) {
        e.preventDefault();
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
                <h2>Name, how was your experience at The Cecil Steakhouse? </h2>
                <span>Dining Date</span>
                <form className="reviews-form" action="">
                    <h3 className="bold-text center-text">Rate your dining experience (required)</h3>
                    <label htmlFor="" className="reviews-form-input-container">Food
                        <div className="reviews-radio-collection">
                            <Rating
                                emptySymbol={<i className="material-icons grey star-rating">star_outlined</i>}
                                fullSymbol={<i className="material-icons red">star</i>}
                            />
                        </div>
                    </label>
                    <label htmlFor="" className="reviews-form-input-container">Service
                        <div className="reviews-radio-collection">
                            <Rating
                                emptySymbol={<i className="material-icons grey star-rating">star_outlined</i>}
                                fullSymbol={<i className="material-icons red">star</i>}
                            />
                        </div>
                    </label>
                    <label htmlFor="" className="reviews-form-input-container">Ambience
                        <div className="reviews-radio-collection">
                            <Rating
                                emptySymbol={<i className="material-icons grey star-rating">star_outlined</i>}
                                fullSymbol={<i className="material-icons red">star</i>}
                            />
                        </div>
                    </label>
                    <label htmlFor="" className="reviews-form-input-container">Value
                        <div className="reviews-radio-collection">
                            <Rating
                                emptySymbol={<i className="material-icons grey star-rating">star_outlined</i>}
                                fullSymbol={<i className="material-icons red">star</i>}
                            />
                        </div>
                    </label>
                    <label htmlFor="" className="reviews-form-input-container">Noise Level
                        <div className="reviews-radio-collection">
                            <input type="radio" name="noise" id="" value="1" />
                            <input type="radio" name="noise" id="" value="2" />
                            <input type="radio" name="noise" id="" value="3" />
                        </div>
                    </label>
                    <h3 className="bold-text center-text">Would you recommend (The Cecil Steakhouse) to a friend?</h3>
                        <div className="reviews-form-input-container">
                            <input type="radio" name="noise" id="" value="1" />Yes
                            <input type="radio" name="noise" id="" value="1" />No
                        </div>
                    <h3 className="bold-text center-text">Write a review</h3>
                        <input type="textarea" name="" id=""/>

                    <input type="submit" value="Submit your Review" name="" id=""/>
                </form>
            </div>
        )
    }
}

export default ReviewsForm;