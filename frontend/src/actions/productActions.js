import { PRODUCT_LIST_FAIL, 
         PRODUCT_LIST_REQUEST, 
         PRODUCT_LIST_SUCCESS } from "../constants/productConstants";

import dados from '../data';

export const listProducts = () => (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    });
    try {
        //const { data } = await axios.get('/api/products');
        const { products } = dados;
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: products});
    } catch (error ) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
}
