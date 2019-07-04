class Api::RestaurantsController < ApplicationController

  def index
    debugger
    if params[:search]
      @restaurants = Restaurant.search(params[:search])
      render :index
    else 
      @restaurants = Restaurant.all
      render :index
    end
  end

  def show
    @restaurant = Restaurant.find(params[:id])
    render :show
  end
end
