json.extract! reservation, :id, :user_id, :restaurant_id, :start_datetime, :party_size
json.parsed_datetime reservation.parsed_start_datetime