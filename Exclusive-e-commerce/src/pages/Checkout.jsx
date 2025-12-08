import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {

    const product = useSelector((state) => state.cartInfo.value)
    console.log(product);
    

    const [checkoutDetails, setCheckoutDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        postcode: "", 
    })

    const handleChang = (e) => {
        setCheckoutDetails({...checkoutDetails, [e.target.name] : e.target.value})
    }

    const handleSubmit = () => {
        console.log(checkoutDetails);
        
    }

  return (
    <div className='py-10 font-poppins'>

        <div className='flex justify-between'>
            

        <div>
            <div className='w-[500px]'>
                <input
                name='firstName' 
                value={checkoutDetails.firstName}
                onChange={handleChang}
                type="text"
                placeholder = "Enter Your First Name"
                className=' w-full border rounded 
                px-3
                py-2 mb-5' />
            </div>

            <div className='w-[500px]'>
                <input 
                name='lastName' 
                value={checkoutDetails.lastName}
                onChange={handleChang}
                type="text"
                placeholder = "Enter Your Last Name"
                className=' w-full border rounded 
                px-3
                py-2 mb-5' />
            </div>

            <div className='w-[500px]'>
                <input
                name='email' 
                value={checkoutDetails.email}
                onChange={handleChang}
                type="email"
                placeholder = "Enter Your Email"
                className=' w-full border rounded 
                px-3
                py-2 mb-5' />
            </div>

            <div className='w-[500px]'>
                <input
                name='phone' 
                value={checkoutDetails.phone}
                onChange={handleChang}
                type="text"
                placeholder = "Enter Your Phone"
                className=' w-full border rounded 
                px-3
                py-2 mb-5' />
            </div>

            <div className='w-[500px]'>
                <input
                name='address' 
                value={checkoutDetails.address}
                onChange={handleChang}
                type="text"
                placeholder = "Enter Your Address"
                className=' w-full border rounded 
                px-3
                py-2 mb-5' />
            </div>

            <div className='w-[500px]'>
                <input 
                name='postcode' 
                value={checkoutDetails.postcode}
                onChange={handleChang}
                type="text"
                placeholder = "Enter Your Post Code"
                className=' w-full border rounded 
                px-3
                py-2 mb-5' />
            </div>
            <div className='w-[500px]'>
                <input
                name='city' 
                value={checkoutDetails.city}
                onChange={handleChang}
                type="text"
                placeholder = "Enter Your  City"
                className=' w-full border rounded 
                px-3
                py-2 mb-5' />
            </div>
            <div className='w-[500px]'>
               <button 
               onClick={handleSubmit}
               className='w-full bg-primary text-white
               py-3  text-center rounded-full'>
                Checkout
               </button>
            </div>
        </div>

        <div>
            Product Details
            {
                product.map((item)=> (
                <div>
                    <img src={item?.image} alt="" />
                </div>
                ))
            }
        </div>
        </div>
      
    </div>
  )
}

export default Checkout
