const intialState = {
    user: null
}

export const user = (state = intialState, action) => {
    switch (action.type) {
      case "SET_USER":
        return { ...state, user: action.payload };
      default:
        return state;
    }
  };