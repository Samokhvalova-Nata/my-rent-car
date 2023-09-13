import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./carsSlice";
import { filterReducer } from "./filtersSlice";

export const store = configureStore({
	reducer: {
		cars: carsReducer,
		filter: filterReducer,
	},
});