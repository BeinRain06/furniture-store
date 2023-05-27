import { createSlice } from "@reduxjs/toolkit";
import { dataProducts } from "../dataProducts";

const cartSlice = createSlice({
  name: "furniture",
  initialState: {
    quantity: 0,
    totalPrice: 0,
    productsList: dataProducts,
    myCartProducts: [],
    currency: "EUR",
    totalQuantity: 0,
    entireBill: 0,
    isCartShowed: false,
  },
  reducers: {
    setCartShowed: (state, action) => {
      state.isCartShowed = action.payload;
    },
    addToCart: (state, action) => {
      const newItem = action.payload;

      const index1 = newItem.id - 1;

      const existingItem = state.myCartProducts.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
        state.productsList[index1].quantity++;
        console.log(existingItem.quantity);
        console.log(existingItem.totalPrice);
      } else {
        state.myCartProducts.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
        state.totalQuantity++;
        state.productsList[index1].quantity = 1;
      }

      state.entireBill = state.myCartProducts.reduce((accumulator, item) => {
        return accumulator + item.totalPrice;
      }, 0);
    },

    removeFromCart: (state, action) => {
      const newItem = action.payload;

      const index1 = newItem.id - 1;

      const existingItem = state.myCartProducts.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        if (existingItem.quantity === 1) {
          existingItem.totalPrice -= existingItem.price;
          state.totalQuantity--;
          state.myCartProducts = state.myCartProducts.filter((item) => item.id !== newItem.id);
          state.productsList[index1].quantity = 0;
        } else {
          state.productsList[index1].quantity--;
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
        }
      }

      state.entireBill = state.myCartProducts.reduce((accumulator, item) => {
        return accumulator + item.totalPrice;
      }, 0);
    },
    deleteOfCart: (state, action) => {
      const newItem = action.payload;
      const index1 = newItem.id - 1;

      const existingItem = state.myCartProducts.find(
        (item) => item.id === newItem.id
      );

      existingItem.totalPrice = 0;
      existingItem.quantity = 0;
      state.productsList[index1].quantity = 0;
      console.log(state.myCartProducts);

      state.totalQuantity--;

      state.entireBill = state.myCartProducts.reduce((accumulator, item) => {
        return accumulator + item.totalPrice;
      }, 0);

      state.myCartProducts = state.myCartProducts.filter(
        (item) => item.id !== newItem.id
      );
    },
  },
});

//export action function changing initial state
export const cartActions = cartSlice.actions;

// export current State (cartItems)
export const selectMyCartProducts = (state) => {
  return state.furniture.myCartProducts;
};

export const selectCurrency = (state) => {
  return state.furniture.currency;
};

export const selectCartShowed = (state) => {
  return state.furniture.isCartShowed;
};

export const selectTotalQuantity = (state) => {
  return state.furniture.totalQuantity;
};
export const selectEntireBill = (state) => {
  return state.furniture.entireBill;
};
export const selectProductsLists = (state) => {
  return state.furniture.productsList;
};
// export cartSlice

export default cartSlice;
