import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../shared/domains";
import { weatherMock } from "../../../__mock__/weather-mock";

export const fetchCurrentWeather = createAsyncThunk(
    'weather/fetchCurrentWeatherByQuery',
    async (query: string, thunkApi) =>{
        /*const response = await instance.get('/current', { params: {
            query: query,
            //language: 'it'
        }});

        return response.data;*/

        return {
            ...weatherMock,
            location: {
                ...weatherMock.location,
                name: query
            }
        };
    }
)