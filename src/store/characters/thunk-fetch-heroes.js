import { createAsyncThunk } from "@reduxjs/toolkit";


export const thunkFetchHeroes = createAsyncThunk(
  `characters/fetchAll`,
  async (_, thunkApi) => {
    try {
      const res = await fetch(`http://localhost:4000/characters`);
      if (!res.ok) throw new Error(res.statusText);

      const body = await res.json();
      return body;
    }
    catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
