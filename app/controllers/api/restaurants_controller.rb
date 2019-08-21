class Api::RestaurantsController < ApplicationController

  def index
    @restaurants = Restaurant.all
    if params[:search]
      @restaurants = Restaurant.search(params[:search])
    end

    unless @restaurants.length > 0
      @restaurants = Restaurant.all.includes(:reviews)
    end
  end

  def show
    @restaurant = Restaurant.includes(:reviews).find(params[:id])
    render :show
  end
end
