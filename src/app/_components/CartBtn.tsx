"use client";

import { ShoppingCartIcon } from "lucide-react";
import React from "react";
import {
  totalCartItemsSelector,
  TotalPriceSelector,
} from "../../store/features/cartSlice";
import { useAppSelector } from "../../store/store";

interface Props {
  className?: string;
}
const CartBtn = (props: Props) => {
  const totalItems = useAppSelector(totalCartItemsSelector);
  return (
    <div className={`${props.className} relative`}>
      <ShoppingCartIcon className="w-9 text-slate-600" />
      {!!totalItems && (
        <div
          key={totalItems}
          className="bg-[#B88E2F] flex justify-center items-center
        rounded-full w-6 absolute -top-2 -right-2 text-white animate-pingOnce
        "
        >
          {totalItems}
        </div>
      )}
    </div>
  );
};

export default CartBtn;
