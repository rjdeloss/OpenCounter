# == Schema Information
#
# Table name: restaurants
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  address      :string           not null
#  city         :string           not null
#  zip          :string           not null
#  lat          :float            not null
#  lon          :float            not null
#  phone_number :string           not null
#  price_range  :string           not null
#  description  :text             not null
#  cuisine_id   :integer
#  open_time    :time             not null
#  close_time   :time             not null
#  capacity     :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class RestaurantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
