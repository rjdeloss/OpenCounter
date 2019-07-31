json.review do
    json.partial! "api/reviews/review", review: @review
end

json.restaurant do 
    restaurant_rating = Restaurant.find_by(id: @review.restaurant_id)
    json.partial! "api/restaurants/restaurant", restaurant: restaurant_rating
    json.overall_rating restaurant_rating.overall_rating
    json.food_rating restaurant_rating.food_rating
    json.ambiance_rating restaurant_rating.ambiance_rating
    json.value_rating restaurant_rating.value_rating
    json.service_rating restaurant_rating.service_rating
    json.noise_level restaurant_rating.noise_level
    json.recommended_percentage restaurant_rating.recommended_percentage
end