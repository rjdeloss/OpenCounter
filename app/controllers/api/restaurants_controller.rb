class Api::RestaurantsController < ApplicationController

  def index
    @restaurants = Restaurant.all.includes({reviews: [:user]}, :cuisines)
    if params[:search]
      @restaurants = Restaurant.search(params[:search])
    end

    unless @restaurants.length > 0
      @restaurants = Restaurant.all.includes(:reviews)
    end
  end

  def show
    @restaurant = Restaurant.includes({reviews: [:user]}).find(params[:id])
    render :show
  end
end
