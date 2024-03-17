import { useSelector } from "react-redux";
import { WeatherUi } from "../../../component-ui/weather-ui";
import { RootState } from "../../../../../store";

export function WeatherHistoryContainer() {
    
    const history = useSelector((state: RootState) => state.weather.historyWeather)

    return <>
        { history.length > 0 ? 
            history.map(item => <WeatherUi 
                location={item?.location.name} 
                temperature={item?.current.temperature} 
                description={item?.current.weather_descriptions[0]} 
                icon={item?.current.weather_icons[0]} />) : 
            <h4 className="text-xl text-center">Nessun Ricerca effettuata</h4>
        }
    </>
}