import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0
};


export const slice = createSlice({
  name: `counter`,
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value > 0 ? state.value - 1 : state.value;
    },
    incrementByAmount: (state, { payload }) => {
      state.value = state.value + payload;
    }
  }
});

console.log('slice: ', slice);
      
export const { increment, decrement, incrementByAmount } = slice.actions;
export default slice.reducer;
