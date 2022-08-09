import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      products: [],
      totalPrice: 0,
      quantity: 0,
}

const cartSlice = createSlice({
      name: "cart",
      initialState,
      reducers: {
            addCart: (state, action) => {
                  let existProduct = state.products.findIndex((x) => x.id === action.payload.id)

                  if (existProduct !== -1) {
                        state.products[existProduct].quantity += 1;
                        state.totalPrice += state.products[existProduct].price;
                  } else {
                        state.quantity += 1;
                        state.products.push(action.payload);
                        state.totalPrice += action.payload.price;
                  }
            },
            changeQuantity: (state, action) => {
                  let index = state.products.findIndex((x) => x.id === action.payload.id);
                  
                  if (action.payload.type === "+" && state.products[index].quantity < 9) {
                        state.products[index].quantity += 1;
                        state.totalPrice += state.products[index].price
                  }
                  else if (action.payload.type === "-" && state.products[index].quantity > 1) {
                        state.products[index].quantity -= 1;
                        state.totalPrice -= state.products[index].price
                  };
            },
            deleteProduct: (state, action) => {
                  const deletedProduct = state.products.find((x) => x.id === action.payload)
                  state.products = state.products.filter(x => x.id !== action.payload)
                  state.quantity -= 1;
                  state.totalPrice -= deletedProduct.price
            }
      }
})

export const { addCart, changeQuantity, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;