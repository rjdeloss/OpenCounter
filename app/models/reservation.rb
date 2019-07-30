# == Schema Information
#
# Table name: reservations
#
#  id             :bigint           not null, primary key
#  user_id        :integer          not null
#  restaurant_id  :integer          not null
#  start_datetime :datetime         not null
#  party_size     :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Reservation < ApplicationRecord
    validates :user_id, :restaurant_id, :start_datetime, :party_size, presence: true
    validate :operating_hours, :booking_reservations, :no_customer_overlap
    
    belongs_to :user
    belongs_to :restaurant

    before_validation :include_reservation_end_time

    def parsed_start_datetime 
        start_datetime.strftime("%a, %b %-d at %-l:%M %P")
    end

    def reset_timezone
        start_datetime.change(offset: "+0000")
    end

    def include_reservation_end_time
        self.end_datetime = self.start_datetime + 1.hour
    end
    
    def operating_hours
        unless (start_datetime <= (restaurant.close_time - 1.hour).change(
            day: start_datetime.day, 
            month: start_datetime.month, 
            year: start_datetime.year, 
            )) && (
                start_datetime >= restaurant.open_time.change(
                    day: start_datetime.day, 
                    month: start_datetime.month, 
                    year: start_datetime.year, 
                    ))
                    errors[:reservation] << "Restaurant must be open to make reservation."
                end
            end

    def booking_reservations 
        if start_datetime < DateTime.now.change(offset: "+0000")
            errors[:reservation] << "Cannot make reservations before current time."
        end
    end
    
    def no_customer_overlap
        start_time = self.start_datetime - 1.hour
        end_time = self.end_datetime + 1.hour

        if Reservation.where("start_datetime > ? AND end_datetime < ?", start_time, end_time)
            .where("user_id = ?", user_id).exists?
            errors[:reservation] << "We're sorry. Reservation has been taken."
        end
    end

end
