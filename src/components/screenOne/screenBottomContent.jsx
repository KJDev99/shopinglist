import React from "react";
import { cartItems } from "../../cartItems";
import CartItem from "../cartItem";

export default function ScreenBottomContent() {
  return (
    <div className="w-full overflow-y-auto p-4 scroll-hidden mb-[40px] mt-6 relative">
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <div className="w-full sticky bottom-[-12px] left-0 bg-white h-[108px]">
        <div className="bg-[#F7F6F6]  rounded-[16px] w-full flex justify-between items-center px-4 py-5">
          <div className="flex justify-between w-full">
            <div className="flex flex-col  px-[55px]">
              <h3 className="text-[#969696] uppercase mb-[6px]">items</h3>
              <p className="text-2xl text-[#969696]">3.54 kg・11 pcs</p>
            </div>
            <div className="flex gap-[60px] ml-[68px]">
              <div className="flex flex-col">
                <h3 className="text-[#969696] uppercase mb-[6px]">Total</h3>
                <p className="text-2xl text-[#000] font-medium px-1.5 py-1">
                  €&nbsp;107.99
                </p>
              </div>

              <div className="flex flex-col">
                <h3 className="text-[#969696] uppercase mb-[6px]">
                  for payment
                </h3>
                <p className="text-2xl text-[#000] font-medium px-1.5 py-1">
                  €&nbsp;107.99
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
