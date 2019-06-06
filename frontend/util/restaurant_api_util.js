export const fetchRestaurants = data => (
    $.ajax({
        method: `get`, 
        url: `api/restaurants`, 
        data
    })
)

export const fetchRestaurant = id => (
    $.ajax({
        method: `get`, 
        url: `api/restaurants/${id}`, 
    })
)
