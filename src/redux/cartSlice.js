import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  productData: [],
  userInfo: null
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    addToCart: (state, action) => {
      const item = state.productData.find(product => product._id === action.payload._id);

      if (item) item.quantity += action.payload.quantity;
      else state.productData.push(action.payload);
    },

    incrementQuantity: (state, action) => {
      const item = state.productData.find(item => item._id === action.payload);
      if (item) item.quantity++;
    }, 

    decrementQuantity: (state, action) => {
      const item = state.productData.find(item => item._id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },

    removeItem: (state, action) => {
      const removeItem = state.productData.filter((item)=> item._id !== action.payload);
      state.productData = removeItem;
    }
  }
})

export const cartReducer = cartSlice.reducer;

export const
 {
  addToCart,
  incrementQuantity, 
  decrementQuantity,
  removeItem
} = cartSlice.actions;
