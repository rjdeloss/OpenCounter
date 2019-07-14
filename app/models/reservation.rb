# == Schema Information
#
# Table name: reservations
#
#  id             :bigint           not null, primary key
#  user_id        :integer          not null
#  restaurant_id  :integer          not null
#  start_datetime :datetime         not null
#  party_size     :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Reservation < ApplicationRecord
    validates :user_id, :restaurant_id, :start_datetime, :party_size, presence: true
    
    belongs_to :user
    belongs_to :restaurant
end
