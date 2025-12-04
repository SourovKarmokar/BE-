import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const product  = useSelector((state)=> state.cartInfo.value)
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
        <div>{item.name}</div>
        <div>{item.price}</div>
        <div className='flex gap-x-4 items-center'>
            <p className='cursor-pointer'>
               -
            </p>
            <p>
                {item.cartQun}
            </p>
            <p className='cursor-pointer'>
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
