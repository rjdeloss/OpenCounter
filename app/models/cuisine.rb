# == Schema Information
#
# Table name: cuisines
#
#  id         :bigint           not null, primary key
#  cuisine    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Cuisine < ApplicationRecord

    has_many :restaurant_cuisines

    has_many :restaurants,
        through: :restaurant_cuisines, 
        source: :restaurant

    CUISINES = [
        "American", 
        "Indian", 
        "Soul", 
        "Japanese", 
        "Korean", 
        "French", 
        "Mexican", 
        "Thai", 
        "Vietnamese", 
        "Mediterranean", 
        "Chinese", 
        "Morrocan", 
        "Italian", 
        "Lebanese", 
        "Seafood",
        "Indonesian", 
        "Peruvian", 
        "Bulgarian", 
        "African", 
        "Polish", 
        "Russian", 
        "Iranian", 
        "Portuguese", 
        "Tapas", 
        "Brazilian"
    ]
end
