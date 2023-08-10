import { createSlice } from "@reduxjs/toolkit";
import { getCharacters } from "../../requests/api";

const initialState = {
  characters: [],
  status: 'loading',
  error: null,
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCharacters.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.characters = action.payload;
      })
      .addCase(getCharacters.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default charactersSlice.reducer;