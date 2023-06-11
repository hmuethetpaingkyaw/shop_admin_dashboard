
const initialState = {
    products: []
}

export const product = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "DELETE_PRODUCT":
      return { ...state, products: state.products.filter((item)=> item.id != action.payload) };
    default:
      return state;
  }
};
