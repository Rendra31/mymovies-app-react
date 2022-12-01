import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
const favSlice = createSlice({
  name: "add",
  initialState: [],
  reducers: {
    addFav: (state, action) => {
      state.push(action.payload);
      action.payload.title;
      Swal.fire(`${action.payload.title}`, " add to Favorites", "success");
    },
    deleteFav: (state, action) => {
      console.log(state);
      console.log(action);
      // return state.filter(({ item }) => item.id !== action.payload.id);
    },
  },
});

export const { addFav, deleteFav } = favSlice.actions;
export default favSlice.reducer;
