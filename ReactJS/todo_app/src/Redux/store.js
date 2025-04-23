import { configureStore } from "@reduxjs/toolkit";
import { sampleReducer } from "./sample.slice";
import { counterReducer } from "./counter.slice";

const store = configureStore({
    reducer: {
        sample: sampleReducer,
        counter: counterReducer
    }
})

export default store