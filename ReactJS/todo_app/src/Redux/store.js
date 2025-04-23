import { configureStore } from "@reduxjs/toolkit";
import { sampleReducer } from "./sample.slice";

const store = configureStore({
    reducer: {
        sample: sampleReducer
    }
})

export default store