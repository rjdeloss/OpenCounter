# == Schema Information
#
# Table name: restaurants
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  address      :string           not null
#  city         :string           not null
#  zip          :string           not null
#  lat          :float            not null
#  lon          :float            not null
#  phone_number :string           not null
#  price_range  :string           not null
#  description  :text             not null
#  cuisine_id   :integer
#  open_time    :time             not null
#  close_time   :time             not null
#  capacity     :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Restaurant < ApplicationRecord

    
    validates :name, :address, :city, :zip, :phone_number, 
    :price_range, :description, :open_time, :close_time, :capacity, 
    presence: true
    
    has_many :reservations
    has_many :reviews
    has_many :favorites
    has_many :restaurant_cuisines
    
    has_many :cuisines,
    through: :restaurant_cuisines
    
    has_many :reservees,
    through: :reservations, 
    source: :user
    
    has_many :reviewers, 
    through: :reviews, 
    source: :user
    
    has_many :favoritees, 
    through: :favorites, 
    source: :user

    has_one_attached :photo
    
    include PgSearch
    pg_search_scope :search, against: [:name, :city, :zip], 
        using: {tsearch: {dictionary: "english"}}, 
        associated_against: {cuisines: :cuisine}

    # def self.search(query)
    #     if query.present?
    #         search_text(query)
    #     else
    #         order("created_at DESC")
    #     end
    # end

    # def self.search(params)
    #     if params.present?
    #         search(params)
    #     else
    #         scoped
    #     # str = "%#{params}%"
    #     # @restaurants = Restaurant
    #     #     .joins("LEFT OUTER JOIN reservations ON reservations.restaurant_id = restaurants.id")
    #     #     .where("UPPER(restaurants.name) LIKE UPPER(?) OR
    #     #                 UPPER(restaurants.city) LIKE UPPER(?) OR
    #     #                 restaurants.zip LIKE ?", str, str, str)
    #     end
    # end

    def get_all_ratings
        ratings = Hash.new(0)
        count = 0 
        self.reviews.each do |review|
            count += 1
            ratings[:overall_rating] += review.overall_rating
            ratings[:food_rating] += review.food_rating
            ratings[:ambiance_rating] += review.ambiance_rating
            ratings[:service_rating] += review.service_rating
            ratings[:value_rating] += review.value_rating
            ratings[:noise_level] += review.noise_level
        end
            ratings[:overall_rating] = (ratings[:overall_rating] / (count * 1.0)).round(1)
            ratings[:food_rating] = (ratings[:food_rating] / (count * 1.0)).round(1)
            ratings[:ambiance_rating] = (ratings[:ambiance_rating] / (count * 1.0)).round(1)
            ratings[:service_rating] = (ratings[:service_rating] / (count * 1.0)).round(1)
            ratings[:value_rating] = (ratings[:value_rating] / (count * 1.0)).round(1)
            ratings[:noise_level] = (ratings[:noise_level] / (count * 1.0)).round(1)
        return ratings
    end

    def recommended_percentage
        recomendations = self.reviews.pluck(:recommended)
        recommended = recomendations.select { |i| i == 1}
        ((recommended.sum * 1.0 / recomendations.length) * 100).round(0)
    end

    CITIES = [
        "New York Area",
        "Chicago",
        "Los Angeles", 
        "San Francisco", 
        "Miami", 
        "Las Vegas"
    ]

end
