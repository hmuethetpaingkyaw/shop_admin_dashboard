
const initialState = {
    categories: [] ,
    category : {}
}

export const category = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "DELETE_CATEGORIES":
      return { ...state, categories: state.categories.filter((item)=> item.id != action.payload) };
    default:
      return state;
  }
};
