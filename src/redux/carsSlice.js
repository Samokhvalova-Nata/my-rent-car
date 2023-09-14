import { createSlice } from "@reduxjs/toolkit";
import { getAllCars, getCarById } from "./operations";

// const handlePending = (state) => {
//     state.isLoading = true;
// };

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
                state.isLoading = 'getAll';
            })
            .addCase(getAllCars.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                // state.items = payload;
                state.items.push(...payload);
            })
            .addCase(getAllCars.rejected, handleRejected)

            .addCase(getCarById.pending, (state) => {
                state.isLoading = "getById";
            })
            .addCase(getCarById.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                state.shownItem = payload;
            })
            .addCase(getCarById.rejected, handleRejected)
    }
});

export const carsReducer = carsSlice.reducer;