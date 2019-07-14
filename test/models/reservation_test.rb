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

require 'test_helper'

class ReservationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
