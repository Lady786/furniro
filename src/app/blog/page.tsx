import React from "react";
import table1 from "../../../public/img/table1.png";
import table2 from "../../../public/img/table2.png";
import table3 from "../../../public/img/table3.png";
import recent from "../../../public/img/Rectangle 69.png";
import recent2 from "../../../public/img/Rectangle 69 (1).png";
import recent3 from "../../../public/img/Rectangle 69 (2).png";
import recent4 from "../../../public/img/Rectangle 69 (3).png";
import recent5 from "../../../public/img/Rectangle 69 (4).png";

import shopBg from "../../../public/img/shop-bg.png";
import Link from "next/link";

import admin from "../../../public/icons/admin.png";
import calendar from "../../../public/icons/calender.png";
import tag from "../../../public/icons/tag.png";
const blogPage = () => {
  return (
    <>
      <div className="relative">
        <img className="mx-[auto] w-full" src={shopBg.src} alt="" />
        <div className="absolute top-[40%] text-center w-full">
          <div className="container">
            <p className="font-poppins text-[48px] font-[600]">Blog</p>
            <p className="font-poppins text-[16px] font-[300] ml-3">
              <Link href={"/"}>Home</Link> / Blog
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-[100px]">
        <div className=" h-auto flex items-center justify-between">
          <div className="w-[820px] h-auto ">
            <div className="flex flex-col justify-between  h-[793px]">
              <img src={table1.src} alt="" />
              <div className="flex justify-between w-[350px] ">
                <div className="flex">
                  <img src={admin.src} alt="" />
                  <h1 className="text-[#9F9F9F] ml-[5px]">Admin</h1>
                </div>
                <div className="flex">
                  <img src={calendar.src} alt="" />
                  <h1 className="text-[#9F9F9F] ml-[5px]">14 Oct 2022</h1>
                </div>
                <div className="flex">
                  <img src={tag.src} alt="" />
                  <h1 className="text-[#9F9F9F] ml-[5px]">Wood</h1>
                </div>
              </div>
              <h1 className="text-[30px] font-poppins font-medium">
                Going all-in with millennial design
              </h1>
              <p className="text-[#9F9F9F]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <p className="underline text-[16px] font-poppins font-medium">
                Read More
              </p>
            </div>
            <div className="flex flex-col justify-between  h-[793px]">
              <img src={table2.src} alt="" />
              <div className="flex justify-between w-[350px] ">
                <div className="flex">
                  <img src={admin.src} alt="" />
                  <h1 className="text-[#9F9F9F] ml-[5px]">Admin</h1>
                </div>
                <div className="flex">
                  <img src={calendar.src} alt="" />
                  <h1 className="text-[#9F9F9F] ml-[5px]">14 Oct 2022</h1>
                </div>
                <div className="flex">
                  <img src={tag.src} alt="" />
                  <h1 className="text-[#9F9F9F] ml-[5px]">Wood</h1>
                </div>
              </div>
              <h1 className="text-[30px] font-poppins font-medium">
                Exploring new ways of decorating
              </h1>
              <p className="text-[#9F9F9F]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <p className="underline text-[16px] font-poppins font-medium">
                Read More
              </p>
            </div>
            <div className="flex flex-col justify-between border h-[793px]">
              <img src={table3.src} alt="" />
              <div className="flex justify-between w-[350px] ">
                <div className="flex">
                  <img src={admin.src} alt="" />
                  <h1 className="text-[#9F9F9F] ml-[5px]">Admin</h1>
                </div>
                <div className="flex">
                  <img src={calendar.src} alt="" />
                  <h1 className="text-[#9F9F9F] ml-[5px]">14 Oct 2022</h1>
                </div>
                <div className="flex">
                  <img src={tag.src} alt="" />
                  <h1 className="text-[#9F9F9F] ml-[5px]">Wood</h1>
                </div>
              </div>
              <h1 className="text-[30px] font-poppins font-medium">
                Handmade pieces that took time to make
              </h1>
              <p className="text-[#9F9F9F]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <p className="underline text-[16px] font-poppins font-medium">
                Read More
              </p>
            </div>
          </div>
          <div className="w-[393px] h-[2350px]  flex items-center flex-col ">
            <input
              className="w-[311px] h-[58px] outline-none border-2 rounded-xl"
              type="text"
            />
            <div className="mt-[30px]">
              <h1 className="text-[24px] font-medium font-poppins">
                Categories
              </h1>
              <p className="text-[#9F9F9F]">Crafts</p>
              <p className="text-[#9F9F9F]">Design</p>
              <p className="text-[#9F9F9F]">Handmade</p>
              <p className="text-[#9F9F9F]">Interior</p>
              <p className="text-[#9F9F9F]">Wood</p>
            </div>
            <div className="w-[392px] h-[650px] flex flex-col justify-between items-center mt-[100px]">
              <h1 className="text-[24px] font-medium font-poppins">
                Recent Posts
              </h1>
              <div className="flex items-center w-[211px] h-[80px] ">
                <img src={recent.src} alt="" />
                <p className="ml-[15px]">
                  Going all-in with millennial design <br />
                  <span className="text-[#9F9F9F] text-[12px]">
                    03 Aug 2022
                  </span>
                </p>
              </div>
              <div className="flex items-center w-[211px] h-[80px] ">
                <img src={recent2.src} alt="" />
                <p className="ml-[15px]">
                  Exploring new ways of decorating <br />
                  <span className="text-[#9F9F9F] text-[12px] ">
                    03 Aug 2022
                  </span>
                </p>
              </div>
              <div className="flex items-center w-[211px] h-[80px] ">
                <img src={recent3.src} alt="" />
                <p className="ml-[15px]">
                  Handmade pieces that took time to make <br />
                  <span className="text-[#9F9F9F] text-[12px]">
                    03 Aug 2022
                  </span>
                </p>
              </div>
              <div className="flex items-center w-[211px] h-[80px] ">
                <img src={recent4.src} alt="" />
                <p className="ml-[15px]">
                  Modern home in Milan <br />
                  <span className="text-[#9F9F9F] text-[12px]">
                    03 Aug 2022
                  </span>
                </p>
              </div>
              <div className="flex items-center w-[211px] h-[80px] ">
                <img src={recent5.src} alt="" />
                <p className="ml-[15px]">
                  Colorful office redesign <br />
                  <span className="text-[#9F9F9F] text-[12px]">
                    03 Aug 2022
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default blogPage;
