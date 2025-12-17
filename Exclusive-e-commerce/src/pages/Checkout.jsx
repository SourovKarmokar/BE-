import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import axios from "axios";

const Checkout = () => {
  const data = useLocation();
  console.log(data.state.totalPrice);
  const totals = data.state.totalPrice;

  const product = useSelector((state) => state.cartInfo.value);
  console.log(product);

  const [checkoutDetails, setCheckoutDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postcode: "",
  });

  const handleChang = (e) => {
    setCheckoutDetails({ ...checkoutDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log(checkoutDetails);
    try {
      const response = await axios.post("http://localhost:3000/api/v1/order/payment", {
        firstName: checkoutDetails.firstName,
        lastName: checkoutDetails.lastName,
        email: checkoutDetails.email,
        address: checkoutDetails.address,
        city: checkoutDetails.city,
        phone: checkoutDetails.phone,
        postcode: checkoutDetails.postcode,
        totalPrice: totals, 
        products: product,   
      });
      console.log(response.data, "response");
      
      // Optional: Show success message or redirect
      alert("Order placed successfully!");
      
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <div className="py-10 font-poppins">
      <div className="flex  gap-x-20">
        <div>
          <div className="w-[500px]">
            <input
              name="firstName"
              value={checkoutDetails.firstName}
              onChange={handleChang}
              type="text"
              placeholder="Enter Your First Name"
              className=" w-full border rounded 
                px-3
                py-2 mb-5"
            />
          </div>

          <div className="w-[500px]">
            <input
              name="lastName"
              value={checkoutDetails.lastName}
              onChange={handleChang}
              type="text"
              placeholder="Enter Your Last Name"
              className=" w-full border rounded 
                px-3
                py-2 mb-5"
            />
          </div>

          <div className="w-[500px]">
            <input
              name="email"
              value={checkoutDetails.email}
              onChange={handleChang}
              type="email"
              placeholder="Enter Your Email"
              className=" w-full border rounded 
                px-3
                py-2 mb-5"
            />
          </div>

          <div className="w-[500px]">
            <input
              name="phone"
              value={checkoutDetails.phone}
              onChange={handleChang}
              type="text"
              placeholder="Enter Your Phone"
              className=" w-full border rounded 
                px-3
                py-2 mb-5"
            />
          </div>

          <div className="w-[500px]">
            <input
              name="address"
              value={checkoutDetails.address}
              onChange={handleChang}
              type="text"
              placeholder="Enter Your Address"
              className=" w-full border rounded 
                px-3
                py-2 mb-5"
            />
          </div>

          <div className="w-[500px]">
            <input
              name="postcode"
              value={checkoutDetails.postcode}
              onChange={handleChang}
              type="text"
              placeholder="Enter Your Post Code"
              className=" w-full border rounded 
                px-3
                py-2 mb-5"
            />
          </div>
          <div className="w-[500px]">
            <input
              name="city"
              value={checkoutDetails.city}
              onChange={handleChang}
              type="text"
              placeholder="Enter Your  City"
              className=" w-full border rounded 
                px-3
                py-2 mb-5"
            />
          </div>
          <div className="w-[500px]">
            <button
              onClick={handleSubmit}
              className="w-full bg-primary text-white
               py-3  text-center rounded-full"
            >
              Checkout
            </button>
          </div>
        </div>

        <div>
          <h2 className="font-semibold mb-2">Product Details</h2>
          <p>TotalPrice:{totals}</p>
          <table className="w-full min-w-[500px]">
            <thead className="bg-gradient-to-r from-blue-600 to-blue-700">
              <tr>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">
                  Image
                </th>
               
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">
                  Product
                </th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">
                  Qun
                </th>
                 <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">
                  price
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {product.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-blue-50 transition-colors duration-200"
                >
                  <td className="px-4 sm:px-6 py-3 sm:py-4">
                    <img
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover shadow-md border-2 border-slate-100"
                      src={item?.image}
                      alt={item.name}
                    />
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4">
                    <p className="text-slate-800 font-medium text-sm sm:text-base">
                      {item.name}
                    </p>
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4">
                    <p className="text-slate-700">{item.cartQun}</p>
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4">
                    <p className="text-slate-700">{item.price * item.cartQun}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Checkout;