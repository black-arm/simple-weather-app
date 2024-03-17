import React from "react";
import { QueryContainer } from "../containers/query-container";
import { WeatherContainer } from "../containers/weather-container";
import { WeatherHistoryContainer } from "../containers/weather-history-container";


export const WeatherPage = () => {
    return <div className="p-3">
        <QueryContainer />
        <WeatherContainer />
        <div className="mt-3 flex flex-col gap-3">
            <h3 className="text-2xl text-center">Ultime 5 Ricerche: </h3>
            <WeatherHistoryContainer />
        </div>
    </div>
}