import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    selectLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { selectLanguage } = configSlice.actions;
export default configSlice.reducer;
