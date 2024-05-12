import { configureStore } from "@reduxjs/toolkit";
import { origenSlice } from "./slice";

export default configureStore({
  reducer: {
    misValores: origenSlice.reducer,
  },
});
