import { createSlice } from "@reduxjs/toolkit";

const modal = createSlice({
  name: "modal",
  initialState: {
    categoryModal: false,
    authModal: false,
  },
  reducers: {
    setCategoryModal: (state) => {
      state.categoryModal = !state.categoryModal;
    },
    setauthModal: (state) => {
      state.authModal = !state.authModal;
    },
  },
});

export default modal.reducer;
export const { setCategoryModal, setauthModal } = modal.actions;
