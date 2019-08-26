class Api::ReviewsController < ApplicationController
    before_action :require_logged_in
    def index 
        # @res = Restaruant.find_by(id: params[:restaurant_id]).includes({reviews: [:user]})
        # @reviews = res.reviews
        @reviews = Review.all
    end

    def show
        @review = Review.find(params[:id])
    end

    def create
        @review = Review.new(review_params)
        @review.user_id = current_user.id
        if @review.save
            render :show
        else 
            render json: @reviews.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])
        @review.destroy
        render :show
    end

    def ensure_current_reviewed_restaurant
        review = Review.find_by(id: params[:id])
    end

    def review_params
        params.require(:review).permit(:restaurant_id, :overall_rating, :food_rating, :ambiance_rating, :service_rating, :value_rating, :noise_level, :body)
    end
end