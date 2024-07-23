import Link from "next/link";
import React from "react";
import win from "../../../../public/img/trophy 1.png";
import guarantee from "../../../../public/img/guarantee.png";
import shipping from "../../../../public/img/shipping.png";
import customer from "../../../../public/img/customer-support.png";

export const Footer = () => {
  return (
    <>
      <div className="bg-[#FAF3EA]">
        <div className="container h-[270px]  flex items-center ">
          <div className="h-[70px]  flex items-center w-[1400px] ml-[-50px]  ">
            <div className="w-[350px] h-[70px] flex">
              <img src={win.src} alt="" />
              <div>
                <h1 className="text-[25px] font-poppins font-bold">
                  High Quality
                </h1>
                <p className="text-[20px] text-[#89898] font-medium font-popins">
                  crafted from top materials
                </p>
              </div>
            </div>
            <div className="w-[337px] h-[70px] flex">
              <img src={guarantee.src} alt="" />
              <div>
                <h1 className="text-[25px] font-poppins font-bold">
                  Warranty Protection
                </h1>
                <p className="text-[20px] text-[#89898] font-medium font-popins">
                  Over 2 years
                </p>
              </div>
            </div>
            <div className="w-[337px] h-[70px] flex">
              <img src={shipping.src} alt="" />
              <div>
                <h1 className="text-[25px] font-poppins font-bold">
                  Free Shipping
                </h1>
                <p className="text-[20px] text-[#89898] font-medium font-popins">
                  Order over 150 $
                </p>
              </div>
            </div>
            <div className="w-[337px] h-[70px] flex">
              <img src={customer.src} alt="" />
              <div>
                <h1 className="text-[25px] font-poppins font-bold">
                  24 / 7 Support
                </h1>
                <p className="text-[20px] text-[#89898] font-medium font-popins">
                  Dedicated support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container  h-[505px]  ">
        <div className="h-[400px] flex  ">
          <div className="w-[50%] h-[180px]  flex flex-col   justify-around font-poppins ">
            <h1 className="text-[24px]  font-bold font-poppins">Funiro</h1>
            <p className="text-[16px] text-gray-400 font-poppins">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>
          <div className="w-[60%] h-[350px]  flex flex-col  items-center justify-around">
            <h1 className="text-[16px]  text-gray-400 font-poppins">Links</h1>
            <ul className="flex items-center flex-col gap-9 ">
              <li className="text-base  text-[16px] font-bold font-poppins">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="text-base  text-[16px]  font-bold font-poppins">
                <Link href={"/shop"}>Shop</Link>
              </li>
              <li className="text-base text-[16px]  font-bold font-poppins">
                <Link href={"/about"}>About</Link>
              </li>
              <li className="text-base  text-[16px]  font-bold font-poppins">
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="w-[60%] h-[280px]  flex flex-col  items-center justify-around">
            <h1 className=" text-gray-400 text-[16px] font-poppins">Help</h1>
            <ul className="flex items-center flex-col gap-9">
              <li className="text-base  font-bold font-poppins">
                <Link href={"/"}>Payment Options</Link>
              </li>
              <li className="text-base  font-bold font-poppins">
                <Link href={"/"}>Returns</Link>
              </li>
              <li className="text-base  font-bold font-poppins">
                <Link href={"/"}>Privacy Policies</Link>
              </li>
            </ul>
          </div>
          <div className="w-[60%] h-[180px]  flex flex-col  items-center justify-around font-poppins">
            <h1 className=" text-gray-400 text-[16px]">Newsletter</h1>
            <form>
              <input
                className="underline outline-none border-none"
                type="email"
                placeholder="Enter Your Email Address"
              />
              <button className="underline font-poppins">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="container border mt-[20px]"></div>
        <div>
          <p className="text-[16px] font-poppins mt-[20px]">
            2023 furino. All rights reverved
          </p>
        </div>
      </div>
    </>
  );
};
