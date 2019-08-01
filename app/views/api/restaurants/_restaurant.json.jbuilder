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
 json.reviews restaurant.reviews
 