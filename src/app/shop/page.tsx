import React from "react";
import shopBg from "../../../public/img/shop-bg.png";
import Link from "next/link";
import Product from "../_components/products/products";
import filter1 from "../../../public/icons/filter-icon.svg";
import filter2 from "../../../public/icons/filter-icon2.svg";
import filter3 from "../../../public/icons/filter-icon3.svg";

const ShopPage = () => {
  return (
    <>
      <div className="relative">
        <img className="mx-[auto] w-full" src={shopBg.src} alt="" />
        <div className="absolute top-[40%] text-center w-full">
          <div className="container">
            <p className="font-poppins text-[48px] font-[600]">Shop</p>
            <p className="font-poppins text-[16px] font-[300] ml-3">
              <Link href={"/"}>Home</Link> / Shop
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#FAF3EA]">
        <div className="container flex items-center justify-between py-9">
          <div className="flex items-center gap-4">
            <img src={filter1.src} alt="" />
            <p className="font-poppins text-[16px] font-[500]">Filter</p>
            <img src={filter2.src} alt="" />
            <img src={filter3.src} alt="" />
            <p>|</p>
            <p className="font-poppins text-[16px] font-[500]">
              Showing 1-11 of 32 results
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p className="font-poppins text-[16px] font-[500]">Show</p>
            <p className="p-4 text-gray-400 bg-white">11</p>
            <p className="font-poppins text-[16px] font-[500]">Short by</p>
            <p className="p-4 text-gray-400 bg-white">Default</p>
          </div>
        </div>
      </div>
      <div className="container py-[52px]">
        <Product />
      </div>
    </>
  );
};

export default ShopPage;
