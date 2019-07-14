class Api::ReservationsController < ApplicationController
    before_action :ensure_logged_in

    def show
        @reservation = Reservation.find(params[:id])
    end

    def create
        @reservation = Reservation.new(reservation_params)
        @reservation.user_id = current_user.id
        if @reservation.save!
            render :show
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def destroy
        @reservation = Reservation.find(params[:id])
        @reservation.destroy
        render :show
    end
    
    private

    def reservation_params
        params.require(:reservation).permit(:start_datetime, :party_size, :restaurant_id)
    end

end