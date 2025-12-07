import { createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';

const initialState = {
  value: localStorage.getItem("cartDetails") ?
  JSON.parse(localStorage.getItem("cartDetails")) : []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartTotal: (state, action) => {  
      console.log('Payload:', action.payload);   
      const cartIndex = state.value.findIndex((item) => 
      item._id == action.payload._id
      )
      if(cartIndex >= 0) {
        state.value[cartIndex].cartQun += 1
        
      }else{
        state.value.push({...action.payload ,cartQun: 1})
      }
      localStorage.setItem("cartDetails" , JSON.stringify(state.value))
    },
    cartQuantity:(state,action) =>{
    
      console.log(state);
      console.log(action.payload);
      const cartIndex = state.value.findIndex((item) => item._id == action.payload._id )
      
      
     
      if(action.payload.type == "increment"){
        state.value[cartIndex].cartQun ++
      }
      
    }
   
  },
})


export const { cartTotal , cartQuantity } = cartSlice.actions

export default cartSlice.reducer