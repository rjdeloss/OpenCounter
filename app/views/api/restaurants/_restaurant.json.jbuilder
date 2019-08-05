json.extract! restaurant,
 :id,
 :name,
 :address,
 :city,
 :zip,
 :lat,
 :lon,
 :phone_number,
 :price_range,
 :description,
 :open_time,
 :close_time,
 :capacity

 json.cuisine restaurant.cuisines.pluck(:cuisine)
 json.overall_ratings restaurant.get_all_ratings
 json.recommended restaurant.recommended_percentage
 

json.reviews do 
    restaurant.reviews.each do |review|
        json.set! review.id do 
            json.partial! 'api/reviews/review', review: review
        end
    end
end