export const fetchFavorites = data => (
    $.ajax({
        method: `get`, 
        url: `api/favorites`,
        data
    })
)

export const fetchFavorite = id => (
    $.ajax({
        method: `get`, 
        url: `api/favorites/${id}`
    })
)

export const createFavorite = favorite => (
    $.ajax({
        method: `post`, 
        url: `api/favorites`, 
        data: { favorite }
    })
)

export const deleteFavorite = id => (
    $.ajax({
        method: `delete`, 
        url: `api/favorites/${id}`
    })

)