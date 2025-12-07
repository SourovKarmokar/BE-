import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartQuantity } from '../slice/cartSlice'

const Cart = () => {
   const dispatch = useDispatch()
    
    const product  = useSelector((state)=> state.cartInfo.value)

    const handleIncrement = (item) => {
        dispatch(cartQuantity({
          ...item , type: "increment"
        }))
        
    }

  return (
    <div className='py-10 font-poppins'>
      <div className='flex py-3 px-2 shadow justify-between my-5'>
        <div>Product</div>
        <div>Price</div>
        <div>Cart Quantity</div>
        <div>Sub Total</div>
      </div>
      <div>
        {
            product.map((item) => (
                <div className='flex py-3 px-2 shadow justify-between'>
        <div className='flex justify-between'>
          <img className='w-[50px]' src={item.image} alt="" />
          <p> {item.name}</p>
          </div>
        <div>{item.price}</div>
        <div className='flex gap-x-4 items-center'>
            <p className='cursor-pointer'>
               -
            </p>
            <p>
                {item.cartQun}
            </p>
            <p 
            onClick={()=>handleIncrement(item)}
            className='cursor-pointer'>
                +
            </p>
        </div>
        <div>{item.price * item.cartQun}</div>
      </div>
            ))
        }
      </div>
    </div>
  )
}

export default Cart
