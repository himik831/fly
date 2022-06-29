import { createSlice } from "@reduxjs/toolkit";

export const sidebarMenuSlice = createSlice({
  name: "sidebarMenu",
  initialState: {
    value: false,
  },
  reducers: {
    sidebarOpen: (state) => {
      console.log('reducer open')
      state.value = true;
    },
    sidebarClose: (state) => {
      console.log('reducer close')
      state.value = false;
    },
  },
});

export const { sidebarOpen, sidebarClose } = sidebarMenuSlice.actions;

export default sidebarMenuSlice.reducer;
