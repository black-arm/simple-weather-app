
export interface WeatherError {
    success: boolean;
    error: {
        code: number;
        type: string;
        info: string;
    }
}