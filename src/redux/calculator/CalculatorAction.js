import axios from "axios";
import CalculatorSlice from "./CalculatorSlice";
import ApiRouterConst from "../_const/ApiRouterConst";

export const priceCalculator = (calculateRequestDto) => {
    return (dispatch) => {
        dispatch(CalculatorSlice.actions.calculate());
        axios
            .post(ApiRouterConst.CALCULATE, calculateRequestDto)
            .then(response => {
                dispatch(CalculatorSlice.actions.fetchCal(response.data.data));
            })
            .catch(error => {
                if (error !== undefined) {
                    console.log(error)
                }
            })
    }
};
