export const fetchReservation = id => (
    $.ajax({
        method: `get`, 
        url: `api/reservations/${id}`, 
    })
)

export const createReservation = reservation =>(
    $.ajax({
        method: `post`, 
        url: `api/restaurants/${reservation.restaurant_id}/reservations`, 
        data: { reservation }
    })
)

export const deleteReservation = id => (
    $.ajax({
        method: `delete`, 
        url: `api/reservations/${id}`
    })
)