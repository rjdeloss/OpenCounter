json.extract! review, 
 :id,
 :user_id,
 :restaurant_id,
 :overall_rating,
 :food_rating,
 :ambiance_rating,
 :value_rating,
 :service_rating, 
 :noise_level, 
 :recommended,
 :body, 
 :created_at

 json.author review.user.full_name