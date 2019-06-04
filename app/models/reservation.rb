# == Schema Information
#
# Table name: reservations
#
#  id              :bigint           not null, primary key
#  user_id         :integer          not null
#  restaurant_id   :integer          not null
#  overall_rating  :integer          not null
#  food_rating     :integer          not null
#  ambiance_rating :integer          not null
#  value_rating    :integer          not null
#  body            :text             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Reservation < ApplicationRecord
end
