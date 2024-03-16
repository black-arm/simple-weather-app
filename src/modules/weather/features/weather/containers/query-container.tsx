import React from "react";
import { QueryUI } from "../../../component-ui/query-ui";
import { useDispatch } from "react-redux";
import { fetchCurrentWeather } from "../../../domains/thunks";
import { AppDispatch } from "../../../../../store";

export function QueryContainer() {

    const dispatch = useDispatch<AppDispatch>();

    function click(query: string) {
        dispatch(fetchCurrentWeather(query))
    }

    return <QueryUI click={click}/>
}