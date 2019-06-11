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
    :ambience_rating, :value_rating, :body, presence: true

    belongs_to :user
    belongs_to :restaurant 
end
