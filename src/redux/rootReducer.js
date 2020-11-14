import {combineReducers} from "redux";
import ProductSlice from "./product/ProductSlice";
import CalculatorSlice from "./calculator/CalculatorSlice";

export const rootReducer = combineReducers({
    product: ProductSlice.reducer,
    calculator: CalculatorSlice.reducer,
});
