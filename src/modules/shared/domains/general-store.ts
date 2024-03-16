import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface GeneralState {
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
}

const initialState: GeneralState = {
    isError: false,
    isLoading: false,
    errorMessage: ''
}

export const general = createSlice({
    name: 'general',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
            state.isError = false;
            state.errorMessage = '';
        },
        endLoading: (state) => {
            state.isLoading = false;
        },
        httpError: (state, action: PayloadAction<string>) =>{
            state.isLoading = false;
            state.isError = true;
            state.errorMessage = action.payload
        },
        setError: (state) => {
            state.isError = false;
            state.errorMessage = '';
        }
    }
})

export const { startLoading, endLoading, httpError, setError } = general.actions;
export default general.reducer;