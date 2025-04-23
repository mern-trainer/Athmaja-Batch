import { createSlice } from "@reduxjs/toolkit";

const sampleSlice = createSlice({
    name: "sample",
    initialState: {
        name: "Alex",
        age: 20
    },
    reducers: {
        toggleName: (state, action) => {
            console.log(action);
        }
    }
})

export const { toggleName } = sampleSlice.actions
export const { reducer: sampleReducer } = sampleSlice
