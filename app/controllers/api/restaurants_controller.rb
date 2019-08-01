class Api::RestaurantsController < ApplicationController

  def index
    if params[:search]
      @restaurants = Restaurant.search(params[:search])
      render :index
    else 
      @restaurants = Restaurant.all.includes(:reviews)
      render :index
    end
  end

  def show
    @restaurant = Restaurant.includes(:reviews).find(params[:id])
    render :show
  end
end
