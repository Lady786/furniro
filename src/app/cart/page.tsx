"use client";
import CartItemCard from "../_components/CartItemCard";
import React from "react";
import { TotalPriceSelector } from "../../store/features/cartSlice";
import { useAppSelector } from "../../store/store";
import emptyCartImg from "../../../public/img/empty-cart.png";
import shopBg from "../../../public/img/shop-bg.png";
import Link from "next/link";

const CartPage = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalPrice = useAppSelector(TotalPriceSelector);

  return (
    <>
      <div className="relative">
        <img className="mx-[auto] w-full" src={shopBg.src} alt="" />
        <div className="absolute top-[40%] text-center w-full">
          <div className="container">
            <p className="font-poppins text-[48px] font-[600]">Cart</p>
            <p className="font-poppins text-[16px] font-[300] ml-3">
              <Link href={"/"}>Home</Link> / Cart
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="p-2 bg-white rounded-md">
          {totalPrice === 0 ? (
            <div className="w-[300px] flex flex-col mx-auto items-center justify-center">
              <img src={emptyCartImg.src} alt="empty-cart" />
              <p className="text-slate-600 m-3 text-center">Savatingiz boʻsh</p>
            </div>
          ) : (
            <div className="flex justify-between">
              <div className="flex flex-col gap-3">
                {cartItems.map((item) => (
                  <CartItemCard key={item._id} cartItem={item} />
                ))}
              </div>
              <div className="w-[350px] h-[350px] border bg-[#F9F1E7] mt-[30px] flex flex-col items-center justify-around">
                <div><p className="text-[36px] font-poppind font-semibold">Cart Totals</p></div>
                <div className="flex justify-between w-[250px]"><p className="text-[16px] font-medium">Subtotal</p> <p className="text-[16px] text-[#9F9F9F]">Rs. 250,000.00</p></div>
                <div className="flex justify-between w-[250px]"><p className="text-[16px] font-medium">Total</p> <p className="text-[20px] text-[#B88E2F]">Rs. 250,000.00</p></div>
                
                <Link href={"/cart/checkout"}><button className="w-[222px] h-[58px]  border border-black rounded-2xl hover:bg-[#B88E2F] hover:text-white transition duration-300 hover:border-none">
                   Checkout
                </button> </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;
