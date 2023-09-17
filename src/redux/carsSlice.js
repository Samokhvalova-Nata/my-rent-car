import { createSlice } from "@reduxjs/toolkit";
import { getAllCars, getCars } from "./operations";


const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const handlePending = (state) => {
    state.isLoading = true;
};

const initialState = {
    items: [],
    allCars: [],
    shownItem: {},
    isLoading: false,
    error: null,
};

const carsSlice = createSlice({
    name: "cars",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllCars.pending, handlePending)
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

            .addCase(getCars.pending, handlePending)
            .addCase(getCars.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                    state.allCars = action.payload;
            })
            .addCase(getCars.rejected, handleRejected)
    }
});

export const carsReducer = carsSlice.reducer;