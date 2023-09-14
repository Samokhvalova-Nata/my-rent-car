import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://648b60e317f1536d65eae307.mockapi.io";

// export const getAllCars = createAsyncThunk(
//     "cars/getAll",
//     async (_, thunkAPI) => {
//         try {
//         const response = await axios.get("/adverts");
//         return response.data;
//         } catch (e) {
//         return thunkAPI.rejectWithValue(e.message);
//         }
//     }
// );

export const getCarById = createAsyncThunk(
    "cars/getById",
    async (carId, thunkAPI) => {
        try {
            const response = await axios.get(`/adverts/${carId}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const getAllCars = createAsyncThunk(
    "cars/getAll",
    async (page, thunkAPI) => {
        try {
        const response = await axios.get(`/adverts?page=${page}&limit=8`);
        return response.data;
        } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
        }
    }
);