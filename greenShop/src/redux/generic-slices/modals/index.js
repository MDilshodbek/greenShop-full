import { createSlice } from "@reduxjs/toolkit";

const modal = createSlice({
  name: "modal",
  initialState: {
    categoryModal: false,
    authModal: false,
    siteMap: false,
    confirmModal: false,
    trackModal: { show: false, data: null },
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
    setConfirmModal: (state) => {
      state.confirmModal = !state.confirmModal;
    },
    setTrackModal: (state, { payload }) => {
      state.trackModal = payload;
    },
  },
});

export default modal.reducer;
export const {
  setCategoryModal,
  setauthModal,
  setSiteMap,
  setConfirmModal,
  setTrackModal,
} = modal.actions;
