import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../shared/domains";

export const fetchCurrentWeather = createAsyncThunk(
    'weather/fetchCurrentWeatherByQuery',
    async (query: string, thunkApi) =>{
        const response = await instance.get('/current', { params: {
            query: query
        }});

        return response.data;
    }
)