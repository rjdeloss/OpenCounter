export const signup = user => (
    $.ajax({
        method: `post`, 
        url: `api/users`,
        data: user
    })
)

export const login = user => (
    $.ajax({
        method: `post`, 
        url: `api/session`
    })
)

export const logout = () => (
    $.ajax({
        method: `delete`, 
        url: `api/session`
    })
)