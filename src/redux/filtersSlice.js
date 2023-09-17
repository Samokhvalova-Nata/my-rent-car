import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterBrand: "",
    filterPrice: "",
    filterMileage: {
        from: "",
        to: ""
    },
    isFiltred: false,
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
            state.isFiltred = true;
            state.filterBrand = payload.brand;
            state.filterPrice = payload.price;
            state.filterMileage.from = payload.mileageFrom;
            state.filterMileage.to = payload.mileageTo;
        },
        resetFilter(state, { payload }) {
            state.isFiltred = false;
            state.filterBrand = '';
            state.filterPrice = '';
            state.filterMileage.from = '';
            state.filterMileage.to = '';  
        }
    }
});

export const filterReducer = filterSlice.reducer;
export const {
    updateFilter,
    resetFilter
    // updateFilterBrand,
    // updatefilterPrice,
    // updatefilterMileage,
} = filterSlice.actions;