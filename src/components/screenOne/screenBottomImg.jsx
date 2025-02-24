import React from "react";
import { PiWarningCircleBold } from "react-icons/pi";

export default function ScreenBottomImg({ warn }) {
  return (
    <div className="w-full h-full flex items-end">
      {warn && (
        <div className="absolute top-5 right-0 flex items-center text-[#FA6D07] text-2xl p-5 bg-[#FFF5E7] rounded-[16px] font-semibold">
          <PiWarningCircleBold className="mr-3 text-3xl" /> Do not stack goods
          on top of each other
        </div>
      )}
      <img src="/bottomimg1.png" alt="" />
    </div>
  );
}
