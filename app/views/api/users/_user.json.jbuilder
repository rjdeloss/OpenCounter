json.extract! user, :id, :fname, :lname, :email

json.favorites do 
    user.favorites.each do |favorite|
        json.set! favorite.id do 
            json.partial! 'api/favorites/favorite.json.jbuilder', favorite: favorite
            json.overall_rating favorite.restaurant.get_all_ratings
            # json.id favorite.id
            # json.user_id favorite.user_id
            # json.restaurant_id favorite.restaurant_id
            # json.restaurant favorite.restaurant
        end
    end 
end
