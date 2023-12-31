import { apiCall } from "../../service/apiService";


export function getProducts () {
   return async (dispatch) => {
    dispatch({
      type: 'SET_LOADING',
      payload: true
    })
    const response = await apiCall('products','get');
     dispatch({
       type: "SET_PRODUCTS",
       payload: response.data,
     });
     dispatch({
      type: 'SET_LOADING',
      payload: false
    })
   }
}
export function deleteProduct(id) {
  return async (dispatch) => {
    dispatch({
      type: "DELETE_PRODUCT",
      payload: id,
    });
  };
}

