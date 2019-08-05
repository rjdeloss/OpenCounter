import React from 'react';
import moment from 'moment';

class ReviewsForm extends React.Component {
    constructor(props){
        super(props); 
    }    
    
    componentWillUnmount(){
        this.props.clearReviewsErrors()
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
            <div className="reviews-form">
                <h1>This is a review!</h1>
            </div>
        )
    }
}

export default ReviewsForm;