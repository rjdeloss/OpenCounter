# == Schema Information
#
# Table name: reviews
#
#  id              :bigint           not null, primary key
#  user_id         :integer
#  restaurant_id   :integer
#  overall_rating  :integer
#  food_rating     :integer
#  ambiance_rating :integer
#  value_rating    :integer
#  body            :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Review < ApplicationRecord
    validates :user_id, :restaurant_id, :overall_rating, :food_rating,
        :ambiance_rating, :value_rating, :body, presence: true

    validates :overall_rating, :food_rating, :ambiance_rating, :value_rating, 
        inclusion: { 1..5}

    belongs_to :user
    belongs_to :restaurant 

    def calculate_overall_rating 
        self.overall_rating = (
            self.food_rating + 
            self.ambiance_rating + 
            self.value_rating
        ) / 3.0
    end
end
