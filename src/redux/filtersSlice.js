import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterBrand: "",
    filterPrice: "",
    filterMileage: {
        from: null,
        to: null
    },
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        updateFilterBrand(state, { payload }) {
            state.filterBrand = payload;
        },
        updatefilterPrice(state, { payload }) {
            state.filterPrice = payload;
        },
        updatefilterMileage(state, { payload }) {
            state.filterMileage = payload;
        },
    }
});

export const filterReducer = filterSlice.reducer;
export const { updateFilterBrand, updatefilterPrice, updatefilterMileage } = filterSlice.actions;