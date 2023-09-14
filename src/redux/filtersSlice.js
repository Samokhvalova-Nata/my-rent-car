import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterBrand: "",
    filterPrice: "",
    filterMileage: {
        from: "",
        to: ""
    },
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        // updateFilterBrand(state, { payload }) {
        //     state.filterBrand = payload;
        // },
        // updatefilterPrice(state, { payload }) {
        //     state.filterPrice = payload;
        // },
        // updatefilterMileage(state, { payload }) {
        //     state.filterMileage = payload;
        // },
        updateFilter(state, { payload }) {
            state.filterBrand = payload.brand;
            state.filterPrice = payload.price;
            state.filterMileage.from = payload.mileageFrom;
            state.filterMileage.to = payload.mileageTo;
        },
    }
});

export const filterReducer = filterSlice.reducer;
export const {
    updateFilter,
    // updateFilterBrand,
    // updatefilterPrice,
    // updatefilterMileage,
} = filterSlice.actions;