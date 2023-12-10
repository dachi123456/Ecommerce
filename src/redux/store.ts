import ecoslice from './slices/ecom.slice'
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        ecoslice,
    }
})


export default store