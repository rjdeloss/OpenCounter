class Api::RestaurantsController < ApplicationController

  def index
    @restaurants = Restaurant.all
    if @restaurants
      render :index
    else 
      render json: @restaurants.errors.full_messages, status: 422
    end
  end

  def show
    @restaurant = Restaurant.find(params[:id])
    render :show
  end
end
