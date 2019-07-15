@restaurants.each do |restaurant|
    json.set! restaurant.id do 
        json.partial! 'restaurant', restaurant: restaurant
        json.cuisine restaurant.cuisines.pluck(:cuisine)
    end
end