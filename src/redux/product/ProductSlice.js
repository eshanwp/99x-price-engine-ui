import {createSlice} from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name: 'ProductSlice',
    initialState: {
        productList: [],
    },
    reducers: {
        tblFetch: (state, {payload}) => {
            return {
                ...state,
                loading: false,
                productList: payload
            }
        },
    }
});


export default ProductSlice;
