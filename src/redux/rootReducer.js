import { createSlice } from "@reduxjs/toolkit";
import { LANGUAGES } from "../constants/enum/enum.tsx";

export const languageSlice = createSlice({
  name: "language",
  initialState: {
    value: LANGUAGES.RO,
  },
  reducers: {
    languageRO: (state) => {
      state.value = LANGUAGES.RO;
    },
    languageEN: (state) => {
      state.value = LANGUAGES.EN;
    },
  },
});

export const { languageRO, languageEN } = languageSlice.actions;

export default languageSlice.reducer;
