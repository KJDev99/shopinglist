import { FaArrowRight } from "react-icons/fa";
import Button from "./ui/button";
import { GoPlus } from "react-icons/go";
import { useState } from "react";

export default function Footer({ setModalAct }) {
  return (
    <div className="w-full fixed bottom-5 px-9 left-0 bg-white h-[108px]">
      <div className="bg-[#F7F6F6]  rounded-[16px] w-full flex justify-between items-center px-4 py-5">
        <Button
          icon={GoPlus}
          text={"Add product"}
          className="text-xl border-none bg-[#CCF0C6] text-[#16692D]"
        />

        <div className="flex">
          <div className="flex flex-col border-r-1 border-[#D9D9D9] px-[55px]">
            <h3 className="text-[#969696] uppercase mb-[6px]">items</h3>
            <p className="text-2xl text-[#969696]">3.54 kg・11 pcs</p>
          </div>
          <div className="flex gap-[60px] ml-[68px]">
            <div className="flex flex-col">
              <h3 className="text-[#969696] uppercase mb-[6px]">items</h3>
              <p className="text-2xl text-[#000] font-medium px-1.5 py-1">
                €&nbsp;107.99
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[#969696] uppercase mb-[6px]">discount</h3>
              <p className="text-2xl text-[#EC2C4F] font-medium bg-[#FFEAEA] px-1.5 py-1 rounded-lg">
                €&nbsp;107.99
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[#969696] uppercase mb-[6px]">for payment</h3>
              <p className="text-2xl text-[#000] font-medium px-1.5 py-1">
                €&nbsp;107.99
              </p>
            </div>
          </div>
        </div>

        <Button
          iconR={FaArrowRight}
          text={"Proceed to payment"}
          className="text-xl border-none bg-[#16692D] text-[#fff]"
          onClick={() => setModalAct(true)}
        />
      </div>
    </div>
  );
}
