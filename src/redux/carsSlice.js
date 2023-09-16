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
            .addCase(getAllCars.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(...payload);
            })
            .addCase(getAllCars.rejected, handleRejected)
    }
});

export const carsReducer = carsSlice.reducer;