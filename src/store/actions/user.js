export const login = (user) => {
    return async (dispatch) => {
        dispatch({
            type: "SET_USER",
            payload: user
        })
    }
}