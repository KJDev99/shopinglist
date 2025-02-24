import React from "react";

export default function ScreenBottomInfo() {
  return (
    <div className="">
      <h2 className="text-[44px] font-semibold mb-8 mt-10">How to use</h2>
      <ul className="space-y-6">
        {[
          { step: "A", text: "Place the product on the belt" },
          {
            step: "B",
            text: "Place the items, avoiding stacking them on top of each other",
          },
          { step: "C", text: "Go to your tray" },
        ].map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="w-20 h-20 flex items-center justify-center text-[40px] rounded-full bg-[#F7F6F6] text-black font-semibold">
              {item.step}
            </span>
            <span className="ml-9 text-[32px]">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
