import { configureStore } from "@reduxjs/toolkit";
import modal from "./generic-slices/modals";
import shopping from "./slices/shopping";
import wishlist from "./slices/wishlist";

export default configureStore({
  reducer: {
    modal,
    shopping,
    wishlist,
  },
});
