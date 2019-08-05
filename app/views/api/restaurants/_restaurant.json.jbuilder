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
#  :cuisine_id,
 :open_time,
 :close_time,
 :capacity

 json.cuisine restaurant.cuisines.pluck(:cuisine)
#  json.reviews restaurant.reviews
 

json.reviews do 
    restaurant.reviews.each do |review|
        json.set! review.id do 
            json.partial! 'api/reviews/review', review: review
        end
    end
end