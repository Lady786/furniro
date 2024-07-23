import { CartItem } from "../../../interfaces";
import Image from "next/image";
import React from "react";
import { decrement, increment } from "../../store/features/cartSlice";
import { useAppDispatch } from "../../store/store";
import QtyBtn from "./QtyBtn";
import Link from "next/link";

interface Props {
  cartItem: CartItem;
}
const CartItemCard = ({ cartItem }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <table className="w-[800px] divide-y divide-gray-200  mt-[30px]">
          <thead className="bg-[#F9F1E7] ">
            <tr className="grid grid-cols-4 ">
              <th
                scope="col"
                className="px-6 py-3 text-left  text-xs font-medium text-[16px]uppercase tracking-wider "
              >
              Product
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-[16px]  uppercase tracking-wider "
              >
               Price
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-[16px] uppercase tracking-wider"
              >
               Quantity
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-[16px] uppercase tracking-wider "
              >
               Subtotal
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="grid grid-cols-4 items-center py-2  mt-[50px]">
              <td className=" w-[200px] flex  items-center justify-between gap-3  ">
                <Image
                  src={cartItem.product.image}
                  width={200}
                  height={150}
                  alt={cartItem.product.title}
                  className="rounded-md w-[108px] h-[105px]"
                /> 
                <p className="text-[#9F9F9F] text-center text-[16px]">
                  {cartItem.product.title}
                </p>
              </td>
             
              <td className="flex flex-col items-center justify-center gap-3  h-full">
                <div className="flex flex-col items-center justify-center gap-3">
                  <p className="text-[#9F9F9F] text-center text-[16px]">RP {cartItem.product.price}</p>
                  {/* <p>&#xd7;</p> */}
                 
                </div>
              </td>
              <td className="text-center ">
              <QtyBtn
                    qty={cartItem.qty}
                    onDecrease={() => dispatch(decrement(cartItem.product))}
                    onIncrease={() => dispatch(increment(cartItem.product))}
                  />
              </td>
              <td className="text-center  text-[16px] font-medium">
                RP {cartItem.qty * cartItem.product.price}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CartItemCard;
