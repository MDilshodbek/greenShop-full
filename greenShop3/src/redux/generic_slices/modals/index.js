import { createSlice } from "@reduxjs/toolkit";

const modal = createSlice({
  name: "modal",
  initialState: {
    categoryModal: false,
  },
  reducers: {
    setcategoryModal: (state) => {
      state.categoryModal = !state.categoryModal;
    },
  },
});

export default modal.reducer;

export const { setcategoryModal } = modal.actions;
