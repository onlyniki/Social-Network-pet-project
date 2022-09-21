import { configureStore } from "@reduxjs/toolkit";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

const store = configureStore({
  reducer: {
    profileData: profileReducer,
    dialogsData: dialogsReducer,
    sideBarData: sidebarReducer,
  },
});

export default store;
