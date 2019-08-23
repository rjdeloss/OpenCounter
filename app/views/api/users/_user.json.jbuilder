json.extract! user, :id, :fname, :lname, :email

json.favorites do 
    debugger
    user.favorites.each do |favorite|
        debugger
        json.set! favorite.id do 
            json.partial! 'api/favorites/favorite.json.jbuilder', favorite: favorite
            json.overall_rating favorite.restaurant.get_all_ratings
        end
    end 
end
json.favorites({}) if user.favorites.empty?
