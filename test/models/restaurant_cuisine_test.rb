# == Schema Information
#
# Table name: restaurant_cuisines
#
#  id            :bigint           not null, primary key
#  restaurant_id :integer          not null
#  cuisine_id    :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class RestaurantCuisineTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
