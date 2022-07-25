import { createSlice } from "@reduxjs/toolkit";
import * as LS from '../../utils/local-storage';
import { thunkFetchHeroes } from "./thunk-fetch-heroes";


const initialState = {
  cards   : LS.getCards() || {},
  loading : false,
  data    : null,
  error   : ``
};


export const slice = createSlice({
  name: `data`,
  initialState,
  reducers: {
    toggleLike: (state, { payload }) => {
      state.cards[payload] = !state.cards[payload];
    },
  },
  extraReducers: {
    [thunkFetchHeroes.pending.type]: (state) => {
      state.loading = true;
    },
    [thunkFetchHeroes.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.error = ``;
    },
    [thunkFetchHeroes.rejected.type]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  }
});



export const {
  toggleLike,
  fetchCharactersStart,
  fetchCharactersReject,
  fetchCharactersResolve
} = slice.actions;

export default slice.reducer;
