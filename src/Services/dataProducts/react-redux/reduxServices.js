import { createSlice } from "@reduxjs/toolkit";
import { dataProducts } from "../dataProducts";

const getDefaultCart = () => {
  let card = [];
  for (i = 1; i < dataProducts.length + 1; i++) {
    card[i] = 0;
  }
};

const reduxServices = createSlice({
  name: "furniture",
  initialState: {
    count: 0,
    cartItems: { getDefaultCart },
  },
  reducers: {
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

//export action function changing initial state
export const { setCartItems } = reduxServices.actions;

// export current State (cartItems)
export const selectCartItems = (state) => {
  return state.furniture.cartItems;
};

// export property reducer of our userSlice variable
const productReducer = reduxServices.reducer;

export default productReducer;
