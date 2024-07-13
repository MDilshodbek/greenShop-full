import { createSlice } from "@reduxjs/toolkit";

const modal = createSlice({
  name: "modal",
  initialState: {
    categoryModal: false,
    authModal: false,
    siteMap: false,
  },
  reducers: {
    setCategoryModal: (state) => {
      state.categoryModal = !state.categoryModal;
    },
    setauthModal: (state) => {
      state.authModal = !state.authModal;
    },
    setSiteMap: (state) => {
      state.siteMap = !state.siteMap;
    },
  },
});

export default modal.reducer;
export const { setCategoryModal, setauthModal, setSiteMap } = modal.actions;
