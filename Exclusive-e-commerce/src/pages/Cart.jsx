import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartQuantity } from "../slice/cartSlice";
import { Link, useNavigate } from "react-router";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate =  useNavigate()
  const product = useSelector((state) => state.cartInfo.value);

  const [discount, setDiscount] = useState(null);
  const [couponText, setCouponText] = useState("");

  const grandTotal = product.reduce((prev, current) => {
    return prev + current.price * current.cartQun;
  }, 0);
  console.log(grandTotal);

  const handleDecrement = (item) => {
    dispatch(cartQuantity({ ...item, type: "decrement" }));
  };

  const handleIncrement = (item) => {
    dispatch(
      cartQuantity({
        ...item,
        type: "increment",
      })
    );
  };

  const handleCoupon = () => {
    console.log(couponText);
    if (couponText == "sourov20") {
      setDiscount(grandTotal * 0.2);
    }
  };
  
  const total = grandTotal - discount;

  const handleCheckout =() => {
    navigate("/checkout",{
      state:{
        totalPrice:total,
      }
    })
  }


  return (
    <div className="py-10 font-poppins">
      <div className="flex py-3 px-2 shadow justify-between my-5">
        <div className="w-[25%]">Product</div>
        <div className="w-[25%]">Price</div>
        <div className="w-[25%]">Cart Quantity</div>
        <div className="w-[25%]">Sub Total</div>
      </div>
      <div>
        {product.map((item) => (
          <div key={item._id} className="flex py-3 px-2 shadow justify-between">
            <div className="flex justify-between w-[25%]">
              <img className="w-[50px]" src={item.image} alt="" />
              <p> {item.name}</p>
            </div>
            <div>{item.price}</div>
            <div className="flex gap-x-4 items-center w-[25%] ">
              <p
                onClick={() => handleDecrement(item)}
                className="cursor-pointer"
              >
                -
              </p>
              <p>{item.cartQun}</p>
              <p
                onClick={() => handleIncrement(item)}
                className="cursor-pointer"
              >
                +
              </p>
            </div>
            <div className="w-[25%]">{item.price * item.cartQun}</div>
          </div>
        ))}
      </div>

      <div className="flex mt-10  ">
        <div className="w-[50%]">
          <input
            onChange={(e) => setCouponText(e.target.value)}
            type="text"
            placeholder="Apply Coupon"
            className="border px-2 py-2 rounded"
          />
          <button
            onClick={handleCoupon}
            className="bg-primary text-white px-2 py-2 rounded ml-2"
          >
            Apply Coupon
          </button>
        </div>
      </div>

      <div className="flex justify-end ">
        <div className="font-semibold w-[25%]">Grand Total:</div>
        <div className="w-[25%] font-bold">${grandTotal.toFixed(2)}</div>
      </div>

      <div className="flex justify-end ">
        <div className="font-semibold w-[25%]">Discount</div>
        <div className="w-[25%] font-bold">{discount}</div>
      </div>

      <div className="flex justify-end ">
        <div className="font-semibold w-[25%]">Total</div>
        <div className="w-[25%] font-bold">{total}</div>
      </div>

      <div className="flex justify-end ">
        <div onClick={handleCheckout}  className="w-[50%]" >
        <button className="bg-primary text-white w-[50%] py-3 mt-5 rounded-full">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
