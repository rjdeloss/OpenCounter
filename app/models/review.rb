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
        :ambiance_rating, :value_rating, :service_rating, :body, presence: true
    
    validates :user_id, uniqueness: { scope: :restaurant_id, message: "You have already reviewed this restaurant." }
    validates :overall_rating, :food_rating, :ambiance_rating, :value_rating, :service_rating,
        inclusion: { in: 1..5 }
    
    validates :noise_level, inclusion: { in: 1..3 }
    validates :recommended, inclusion: { in: 0..1 }

    belongs_to :user
    belongs_to :restaurant 

    after_initialize :calculate_overall_rating

    def calculate_overall_rating 
        self.overall_rating = (
            self.food_rating + 
            self.ambiance_rating + 
            self.value_rating +
            self.service_rating
        ) / 4.0
    end
end
