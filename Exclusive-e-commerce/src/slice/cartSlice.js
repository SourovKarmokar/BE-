import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartDetails: (state, action) => {     
console.log('Cart State:', state.value);
      console.log(action.payload);
      
    },
   
  },
})


export const { cartDetails } = cartSlice.actions

export default cartSlice.reducer