import { createSlice } from "@reduxjs/toolkit";
import { REDUCERS_NAME } from "../../constants/enum/enum.tsx";

export const sidebarMenuSlice = createSlice({
  name: REDUCERS_NAME.SIDEBAR_MENU,
  initialState: {
    value: false,
  },
  reducers: {
    sidebarOpen: (state) => {
      state.value = true;
    },
    sidebarClose: (state) => {
      state.value = false;
    },
  },
});

export const { sidebarOpen, sidebarClose } = sidebarMenuSlice.actions;

export default sidebarMenuSlice.reducer;
