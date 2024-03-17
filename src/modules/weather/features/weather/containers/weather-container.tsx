import { useSelector } from "react-redux";
import { RootState } from "../../../../../store";
import { WeatherUi } from "../../../component-ui/weather-ui";

export function WeatherContainer() {

    const currentWeather = useSelector((state: RootState) => state.weather.currentWeather )

    return <>
        {currentWeather ? 
            <WeatherUi 
                location={currentWeather?.location.name} 
                temperature={currentWeather?.current.temperature} 
                description={currentWeather?.current.weather_descriptions[0]} 
                icon={currentWeather?.current.weather_icons[0]} /> :
            null 
        }
    </>
}