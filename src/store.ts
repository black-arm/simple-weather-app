import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "./modules/shared/domains/general-store";
import weatherReducer from './modules/weather/domains/weather-store';

export const store = configureStore({
    reducer: {
        general: generalReducer,
        weather: weatherReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch