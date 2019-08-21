export const fetchCuisines = data => (
    $.ajax({
        method: `get`,
        url: `api/cuisines`,
        data
    })
)