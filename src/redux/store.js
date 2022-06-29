import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "../redux/reducers/languageReducer";
import sidebarMenuReducer from "../redux/reducers/sidebarReducer";

export default configureStore({
  reducer: {
    language: languageReducer,
    sidebarMenu: sidebarMenuReducer,
  },
});
