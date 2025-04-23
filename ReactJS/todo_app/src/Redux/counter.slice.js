import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state, action) => {
            console.log(action);
            state.count += action.payload.num
        }
    }
})

export const { increment } = counterSlice.actions
export const { reducer: counterReducer } = counterSlice