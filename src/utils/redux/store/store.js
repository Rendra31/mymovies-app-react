import { configureStore } from "@reduxjs/toolkit";
import favSlice from "../reducer/favSlice";

export const store = configureStore({
  reducer: {
    listFav: favSlice,
  },
});
