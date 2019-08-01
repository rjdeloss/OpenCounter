import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const CLEAR_REVIEW_ERRORS = 'CLEAR_REVIEW_ERRORS';

export const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS, 
    reviews
})

export const receiveReview = review => ({
    type: RECEIVE_REVIEW, 
    review
})

export const removeReview = id => ({
    type: REMOVE_REVIEW, 
    id
})

export const receiveReviewErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS, 
    errors
})

export const clearReviewErrors = () => ({
    type: CLEAR_REVIEW_ERRORS
})

export const fetchReviews = filters => dispatch => (
    ReviewAPIUtil.fetchReviews(filters).then(reviews => dispatch(receiveReviews(reviews)))
)

export const fetchReview = id => dispatch => (
    ReviewAPIUtil.fetchReview(id).then(review => dispatch(receiveReview(review)))
)

export const createReview = review => dispatch => {
    return (
        ReviewAPIUtil.createReview(review).then(
            review => {
                dispatch(receiveReview(review))
            }, 
            errors => dispatch(receiveReviewErrors(errors.reposnseJSON)))
        )
}

export const deleteReview = id => dispatch => (
    ReviewAPIUtil.deleteReview(id).then(review => dispatch(removeReview(review)))
)