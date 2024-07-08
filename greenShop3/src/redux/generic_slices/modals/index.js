import { createSlice } from "@reduxjs/toolkit";

const modal = createSlice({
  name: "modal",
  initialState: {
    categoryModal: false,
    authModal: false,
  },
  reducers: {
    setcategoryModal: (state) => {
      state.categoryModal = !state.categoryModal;
    },
    setAuthModal: (state) => {
      state.authModal = !state.authModal;
    },
  },
});

export default modal.reducer;

export const { setcategoryModal, setAuthModal } = modal.actions;
