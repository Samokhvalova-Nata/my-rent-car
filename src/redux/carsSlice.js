import { createSlice } from "@reduxjs/toolkit";
import { getAllCars } from "./operations";


const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const initialState = {
    items: [],
    shownItem: {},
    isLoading: false,
    error: null,
};

const carsSlice = createSlice({
    name: "cars",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllCars.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllCars.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                if (action.meta.arg === 1) {
                    state.items = action.payload;
                } else {
                    state.items.push(...action.payload)
                }
            })
            .addCase(getAllCars.rejected, handleRejected)
    }
});

export const carsReducer = carsSlice.reducer;