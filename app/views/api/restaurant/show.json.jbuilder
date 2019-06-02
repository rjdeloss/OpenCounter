json.restaurant do
    json.partial! 'api/restaurants/restaurant', restaurant: restaurant
    json.restaurantIds 
end