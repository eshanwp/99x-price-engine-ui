import axios from "axios";
import ProductSlice from "./ProductSlice";
import ApiRouterConst from "../_const/ApiRouterConst";

/**
 * @des store product data
 * @author Eshan
 * @returns {Function}
 * @param productSearchRequestDto
 */
export const searchProduct = (productSearchRequestDto) => {
    return (dispatch) => {
        axios
            .post(ApiRouterConst.PRODUCT_SEARCH, productSearchRequestDto)
            .then(response => {
                dispatch(ProductSlice.actions.tblFetch(response.data.data));
            })
            .catch(error => {
                if (error !== undefined) {
                    console.log(error)
                }
            })
    }
};
