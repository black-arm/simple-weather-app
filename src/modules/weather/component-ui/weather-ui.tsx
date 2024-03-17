import { WeatherDisplay } from "../models/weather";

export function WeatherUi({ location, temperature, description, icon }: WeatherDisplay) {

    return <>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md flex gap-4 justify-center content-center">

            <h3 className="text-xl font-semibold mb-2">{location}</h3>
            <p className="text-lg mb-1">{temperature}°C</p>
            <img
                src={icon}
                alt="Weather Icon"
                className="w-8 h-8"
            />
        </div>
    </>
}