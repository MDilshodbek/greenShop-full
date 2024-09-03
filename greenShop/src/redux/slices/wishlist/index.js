import { createSlice } from "@reduxjs/toolkit";

const wishlist = createSlice({
  name: "wishlist",
  initialState: {
    likedFLowers: JSON.parse(localStorage.getItem("likedFLowers") ?? "[]"),
  },
  reducers: {
    setlikedFLowers: (state, { payload }) => {
      state.likedFLowers = payload;
    },
  },
});

export const { setlikedFLowers } = wishlist.actions;
export default wishlist.reducer;
