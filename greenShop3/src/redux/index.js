import { configureStore } from "@reduxjs/toolkit";
import modal from "./generic_slices/modals";

export default configureStore({
  reducer: {
    modal
  },
});
