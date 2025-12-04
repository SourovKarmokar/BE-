import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: localStorage.getItem("cartDetails") ?
  JSON.parse(localStorage.getItem("cartDetails")) : []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartTotal: (state, action) => {     
      console.log('Cart State:', state.value);
      console.log(action.payload);
      state.value = action.payload;
    },
   
  },
})


export const { cartTotal } = cartSlice.actions

export default cartSlice.reducer