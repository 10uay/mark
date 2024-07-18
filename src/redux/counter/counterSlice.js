import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    counter: (state) => {
      state.counter = state.counter + 1
    },
  },
});

export const { counter } = counterSlice.actions;

export default counterSlice.reducer;
