import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "./modules/shared/domains/general-store";
export const store = configureStore({
    reducer: {
        general: generalReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch