import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Services/dataProducts/react-redux/cartSlice";

export const store = configureStore({
  reducer: {
    furniture: cartSlice.reducer,
  },
});
