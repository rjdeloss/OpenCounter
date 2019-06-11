# == Schema Information
#
# Table name: restaurants
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  address      :string           not null
#  city         :string           not null
#  zip          :integer          not null
#  lat          :integer          not null
#  lon          :integer          not null
#  phone_number :integer          not null
#  price_range  :string           not null
#  description  :text             not null
#  cuisine_id   :string
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
