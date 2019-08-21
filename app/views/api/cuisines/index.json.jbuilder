@cuisines.each do |cuisine|
    json.set! cuisine.id do 
        json.partial! 'cuisine', cuisine: cuisine
    end
end