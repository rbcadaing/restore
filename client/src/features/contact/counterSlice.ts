import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
    data: number;
    title: string;
}

const initialState: CounterState = {
    data: 42,
    title: "Yearc (yet another counter with redux toolkit)"
}

// Using redux toolkit
export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.data += action.payload
        },
        decrement: (state, action) => {
            state.data -= action.payload
        }
    }
})

// redux toolkit action creators
export const {increment,decrement} = counterSlice.actions;