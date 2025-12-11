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
  console.log('Payload:', action.payload);   
  const cartIndex = state.value.findIndex((item) => 
    item._id === action.payload._id
  )
  if(cartIndex >= 0) {
    state.value[cartIndex].cartQun += 1
  } else {
    // Remove the quantity field from payload
    const { quantity, ...itemWithoutQuantity } = action.payload;
    state.value.push({ ...itemWithoutQuantity, cartQun: 1 })
  }
  localStorage.setItem("cartDetails", JSON.stringify(state.value))
},
    cartQuantity:(state,action) =>{
    
      
      const cartIndex = state.value.findIndex((item) => item._id == action.payload._id )
      
      
     
      if(action.payload.type === "increment"){
        state.value[cartIndex].cartQun ++
      }else if(action.payload.type === 'decrement'){
        state.value[cartIndex].cartQun --
      }

      localStorage.setItem("cartDetails", JSON.stringify(state.value))
      
    }
   
  },
})


export const { cartTotal , cartQuantity } = cartSlice.actions

export default cartSlice.reducer