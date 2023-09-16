import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: []
};

const favoriteSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorite(state, { payload }) {
            state.favorites.push(payload);
        },
        deleteFavorite(state, { payload }) {
            state.favorites = state.favorites.filter((item) => item !== payload);
        },
    },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { addFavorite, deleteFavorite } = favoriteSlice.actions;