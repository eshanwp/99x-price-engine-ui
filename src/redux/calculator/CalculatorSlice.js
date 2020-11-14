import {createSlice} from "@reduxjs/toolkit";

const CalculatorSlice = createSlice({
    name: 'CalculatorSlice',
    initialState: {
        calData: {},
    },
    reducers: {
        calculate: (state) => {
            return {
                ...state,
            }
        },
        fetchCal: (state, {payload}) => {
            return {
                ...state,
                calData: payload
            }
        },
    }
});


export default CalculatorSlice;
