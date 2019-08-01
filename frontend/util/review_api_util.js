export const fetchReviews = data => (
    $.ajax({
        method: `get`, 
        url: `api/restaurants/:restaurant_id/reviews`, 
        data
    })
)

export const fetchReview = id => (
    $.ajax({
        method: `get`, 
        url: `api/restaurants/:restaurant_id/reviews/${id}`
    })
)

export const createReview = review => (
    $.ajax({
        method: `post`, 
        url: `api/restaurants/:restaurant_id/reviews`, 
        data: { review }
    })
)

export const deleteReview = id => (
    $.ajax({
        method: `delete`, 
        url: `api/restaurants/:restaurant_id/reviews/${id}`
    })
)