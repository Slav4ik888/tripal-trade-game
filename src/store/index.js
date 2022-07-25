import { configureStore } from '@reduxjs/toolkit';
import { slice as counterSlice } from './counter';
import { slice as charactersSlice } from './characters';
import { charactersAPI } from '../services/characters-api';


export const store = configureStore({
  reducer: {
    counter    : counterSlice.reducer,
    characters : charactersSlice.reducer,
    [charactersAPI.reducerPath]: charactersAPI.reducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(charactersAPI.middleware)
});
