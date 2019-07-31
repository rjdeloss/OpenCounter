class Api::ReviewsController < ApplicationController
    before_action :ensure_logged_in
    def index 
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
        params.require(:review).permit(:overall_rating, :food_rating, :ambiance_rating, :value_rating, :body)
    end
end