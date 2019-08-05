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
    
    include PgSearch
    pg_search_scope :search, against: [:name, :city, :zip], 
        using: {tsearch: {dictionary: "english"}}, 
        associated_against: {cuisines: :cuisine}
    
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

    def overall_rating
        ratings = self.reviews.pluck(:overall_rating)
        (ratings.sum * 1.00 / ratings.length)
    end

    def food_rating
        ratings = self.reviews.pluck(:food_rating)
        (ratings.sum * 1.00 / ratings.length)
    end

    def ambience_rating
        ratings = self.reviews.pluck(:ambience_rating)
        (ratings.sum * 1.00 / ratings.length)
    end

    def service_rating
        ratings = self.reviews.pluck(:service_rating)
        (ratings.sum * 1.00 / ratings.length)
    end

    def value_rating
        ratings = self.reviews.pluck(:value_rating)
        (ratings.sum * 1.00 / ratings.length)
    end

    def noise_level
        ratings = self.reviews.pluck(:noise_level)
        (ratings.sum * 1.00 / ratings.length)
    end

    def recommended_percentage
        recomendations = self.reviews.pluck(:recommended)
        recommended = recomendations.select { |i| i == 1}
        (recommended.sum * 1.0 / recomendations.length) * 100
    end

end
