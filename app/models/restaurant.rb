# == Schema Information
#
# Table name: restaurants
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  address      :string           not null
#  string       :string           not null
#  city         :string           not null
#  zip          :integer          not null
#  lat          :integer          not null
#  lon          :integer          not null
#  phone_number :integer          not null
#  price_range  :string           not null
#  description  :text             not null
#  open_time    :time             not null
#  close_time   :time             not null
#  capacity     :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Restaurant < ApplicationRecord
    has_many :reservations
    has_many :reviews
    has_many :favorites
    has_many :restaurant_cuisines

    # has_many :reviewers, through :reviews, source :users
    # has_many :reservators, through :reservations, source :users
    # # has_many :favoritors, through :fa
end
