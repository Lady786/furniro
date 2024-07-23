import React from "react";
import Link from "next/link";
import logo from "../../../../public/img/logo.png";
import userIcon from "../../../../public/icons/user-icon.png";
import searchIcon from "../../../../public/icons/search-icon.png";
import heartIcon from "../../../../public/icons/heart-icon.png";
import cartIcon from "../../../../public/icons/cart-icon.png";
import CartBtn from "../CartBtn";

export const Header = () => {
  return (
    <div className="container flex items-center justify-between py-[54px] px-[30px]">
      <Link href={"/"}>
        <img src={logo.src} alt="Logo" />
      </Link>
      <ul className="flex items-center gap-[60px]">
        <li className="text-base font-medium font-poppins">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="text-base font-medium font-poppins">
          <Link href={"/shop"}>Shop</Link>
        </li>
        <li className="text-base font-medium font-poppins">
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li className="text-base font-medium font-poppins">
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
      <div>
        <ul className="flex items-center gap-5">
          <li>
            <Link href={"/"}>
              <img src={userIcon.src} alt="User Icon" />
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <img src={searchIcon.src} alt="Search Icon" />
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <img src={heartIcon.src} alt="Heart Icon" />
            </Link>
          </li>
          <li>
            <Link href={"/cart"}>
              <CartBtn />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
