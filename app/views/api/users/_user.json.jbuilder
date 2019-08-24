json.extract! user, :id, :fname, :lname, :email

json.favorites do
    user.favorites.each do |favorite|
        json.set! favorite.id do 
            json.partial! 'api/favorites/favorite.json.jbuilder', favorite: favorite
            json.overall_rating favorite.restaurant.get_all_ratings
        end
    end 
end
json.favorites({}) if user.favorites.empty?
