import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "./App";
import { WeatherRouter } from "./modules/weather/weather-router";

export const router = createBrowserRouter([
    {
        path: '/',
        id: '0',
        element: <App />,
        children: [
            ...WeatherRouter
        ]
    }
])