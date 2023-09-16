import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://648b60e317f1536d65eae307.mockapi.io";


export const getAllCars = createAsyncThunk(
    "cars/getAll",
    async (page, thunkAPI) => {
        try {
            const response = await axios.get('/adverts', {
                params: {page: page, limit: 8}
            });
        return response.data;
        } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
        }
    }
);
