# == Schema Information
#
# Table name: restaurants
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  address      :string           not null
#  city         :string           not null
#  zip          :integer          not null
#  lat          :integer          not null
#  lon          :integer          not null
#  phone_number :integer          not null
#  price_range  :string           not null
#  description  :text             not null
#  cuisine_id   :string
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
end
