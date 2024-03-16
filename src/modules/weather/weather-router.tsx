import React from "react";
import { Suspense } from "react";
import { RouteObject } from "react-router-dom";
import { WeatherPage } from "./features/weather/pages/WatherPage";

export const WeatherRouter: RouteObject[] = [

    {
        path: '',
        element: <Suspense>
                    <WeatherPage />
                </Suspense>
    }
];