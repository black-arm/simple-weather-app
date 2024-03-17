## create .env file
create env file: 
```
REACT_APP_BASE_URL=http://api.weatherstack.com
REACT_APP_ACCESS_KEY=<ACCESS_KEY>
```

uncomment code in thunks.ts and remove weatherMockObject: 

```typescript
export const fetchCurrentWeather = createAsyncThunk(
    'weather/fetchCurrentWeatherByQuery',
    async (query: string, thunkApi) =>{
        /*const response = await instance.get('/current', { params: {
            query: query,
            //language: 'it'
        }});

        return response.data;*/

        return {
            ...weatherMock,
            location: {
                ...weatherMock.location,
                name: query
            }
        };
    }
)
```