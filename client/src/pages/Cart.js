import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { ToastContainer, toast } from 'react-toastify';
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";

const Cart = () => {
  const productData = useSelector((state)=> state.bazar.productData);
  const userInfo = useSelector((state)=> state.bazar.userInfo);
  const [totalAmt, setTotalAmt] = useState("");
  const [payNow, setPayNow] = useState(false);

  useEffect(()=>{
    let price = 0;
    productData.map((item)=>{
      price += item.price * item.quantity;
      return price;
    });
   setTotalAmt(price.toFixed(2)); 
  }, [productData]);
  const handleCheckout=()=>{
    if(userInfo){
      setPayNow(true);
    }else{
      toast.error("Please sign in to Checkout");
    }
  }
  const payment = async(token)=>{
    await axios.post("http://localhost:8000/pay",{
      amount:totalAmt * 100,
      token: token,
    } ) 
  }
  return (
    <div>
      <img 
      className='w-full h-60 object-cover'
      src="https://dlcdnwebimgs.asus.com/files/media/0e92cabf-067b-433c-a590-abdf68c9e029/v1/img/kv.jpg"
      alt="cartImg"
      />
      <div className='max-w-screen-xl mx-auto py-20 flex'>
        <CartItem />
        <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
        <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
          <h2 className='text-2xl font-medium '>cart totals</h2>
          <p className='flex items-center gap-4 text-base'>
              Subtotal{" "}
              <span className='font-titleFont font-bold text-lg'>
                $ {totalAmt}
              </span>
          </p>
          <p className='flex items-start gap-4 text-base'>
            Shipping{" "}
            <span>
              Shipping guidelines 
            </span>
          </p>
        </div>
        <p className='font-titleFont font-semibold flex justify-between mt-6'>
          {" "}
          Total <span className='text-xl font-bold'>$ {totalAmt}</span>
        </p>
        <button 
        onClick={handleCheckout  }
        className='text-base bg-black text-white w-full py-3 mt-6
         hover:bg-gray-800 duration-300'> proceed to checkout
         </button>
         {payNow && (
         <div className='w-full mt-6 flex items-center justify-center'>
            <StripeCheckout
              stripeKey='pk_test_51OYyKCBmvf4A78HA1ifMLJDJtherbdyLFV5wK0TLWFXRi9gNvE2kE9ak6YkAJjIv1XPgMqf5idmP7VgzVrmmoTNw00KhlObZdY'
              name="Computer Online Shopping"
              amount={totalAmt * 100}
              label="Pay to Computer.LLC"
              description={`Your Payment amount is $${totalAmt}`}
              token={payment}
              email={userInfo.email}
              />
            </div>
            
         )}
        </div>
      </div>
      <ToastContainer
      position="top-left"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='dark'
    />
    </div>
  )
}

export default Cart