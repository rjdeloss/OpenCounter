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
        "African", 
        "Chinese", 
        "Brazilian",
        "Bulgarian", 
        "French", 
        "Indian", 
        "Indonesian", 
        "Iranian", 
        "Italian", 
        "Japanese", 
        "Korean", 
        "Mediterranean", 
        "Mexican", 
        "Morrocan", 
        "Lebanese", 
        "Peruvian", 
        "Polish", 
        "Portuguese", 
        "Russian", 
        "Seafood",
        "Soul", 
        "Tapas", 
        "Thai", 
        "Vietnamese" 
    ]
end
