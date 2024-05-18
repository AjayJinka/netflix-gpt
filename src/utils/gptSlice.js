import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptView: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGptView: (state) => {
      state.showGptView = !state.showGptView;
    },
    addGptMovieResults: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    clearGptMovieResults: (state) => {
      state.movieNames = null;
      state.movieResults = null;
    },
  },
});

export const { toggleGptView, addGptMovieResults, clearGptMovieResults } =
  gptSlice.actions;
export default gptSlice.reducer;
