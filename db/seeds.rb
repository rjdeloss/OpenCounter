# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# USER
require 'faker'

User.destroy_all
Restaurant.destroy_all
Review.destroy_all
Reservation.destroy_all

User.create!(
    email: "demo@personalbar.com", 
    fname: "Benjamin", 
    lname: "Jack", 
    password: "111111"
)

5.times do 
    User.create!(
        email: Faker::Internet.unique.email, 
        fname: Faker::Name.first_name, 
        lname: Faker::Name.last_name, 
        password: Faker::Internet.password
    )
end

# RESTAURANTS

PRICE_RANGE = ["$", "$$", "$$$", "$$$$"]
OPEN_TIME = ["8:00", "9:00", "10:00", "11:00", "12:00"]
CLOSE_TIME = ["20:00", "21:00", "22:00", "23:00"]

10.times do
    Restaurant.create(
        name: Faker::Restaurant.unique.name, 
        address: Faker::Address.street_address, 
        city: Faker::Address.city, 
        zip: Faker::Address.zip[0..4],
        lat: Faker::Address.latitude,
        lon: Faker::Address.longitude,
        phone_number: Faker::PhoneNumber.cell_phone, 
        price_range: PRICE_RANGE.sample, 
        description: Faker::Restaurant.description,
        open_time: OPEN_TIME.sample,
        close_time: CLOSE_TIME.sample,
        capacity: rand(80..120)
    )
end


# REVIEWS
RESTAURANT_IDS = Restaurant.all.map { |restaurant| restaurant.id }
USER_IDS = User.all.map {|user| user.id}
User.all.each do |user|
    20.times do 
        Review.create(
        user_id: user.id,
        restaurant_id: RESTAURANT_IDS.sample,
        overall_rating: (1..5).to_a.sample,
        food_rating: (1..5).to_a.sample,
        ambiance_rating: (1..5).to_a.sample,
        value_rating: (1..5).to_a.sample,
        body: Faker::Restaurant.review
        )
    end
end

# RESERVATIONS
5.times do
    Reservation.create(
        user_id: User.first.id, 
        restaurant_id: RESTAURANT_IDS.sample,
        start_datetime: Faker::Time.between(DateTime.now + 5, Date.today, :evening),
        party_size: (1..20).to_a.sample
    )
end