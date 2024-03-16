import { createSlice } from "@reduxjs/toolkit";
import { WeatherData } from "../models/weather";
import { fetchCurrentWeather } from "./thunks";

interface WeatherState {
    currentWeather: WeatherData | null,
    historyWeather: WeatherData[],
}

const initialState: WeatherState = {
    currentWeather: null,
    historyWeather: [],
}

export const wheaterStore = createSlice({
    name: 'weather',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchCurrentWeather.fulfilled, (state, action) => {
            state.currentWeather = action.payload;
            if(state.historyWeather.length < 5){
                state.historyWeather.splice(0, 0, action.payload)
            } else {
                state.historyWeather = [action.payload, state.historyWeather.slice(0, 4)]
            }
        })
    }
})

export default wheaterStore.reducer