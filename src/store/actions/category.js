import { apiCall } from "../../service/apiService";


export function getCategories () {
   return async (dispatch) => {
    dispatch({
      type: 'SET_LOADING',
      payload: true
    })
    const response = await apiCall('categorys?_embed=products','get');
     dispatch({
       type: "SET_CATEGORIES",
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

