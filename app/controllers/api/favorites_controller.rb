class Api::FavoritesController < ApplicationController
    before_action :require_logged_in

    def index 
        # @favorites = Favorite.all
        @favorites = Favorite.where('user_id = ?', params[:userId])
    end
    
    def create
        @favorite = Favorite.new(favorite_params)
        if @favorite.save
            render :show
        else
            render json: @favorite.errors.full_messages, status: 422
        end
    end

    def destroy 
        @favorite = Favorite.find(params[:id])
        @favorite.destroy
        render :show
    end

    def favorite_params
        params.require(:favorite).permit(:user_id, :restaurant_id)
    end
end