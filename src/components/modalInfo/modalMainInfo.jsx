import React from "react";

export default function ModalMainInfo({ img, title, info }) {
  return (
    <div
      className={`h-screen w-screen fixed left-0 top-0 z-[1000] flex items-center justify-center bg_info `}
    >
      <div className="flex flex-col items-center">
        {img && <img src={img} alt="msg" className="mb-[196px]" />}
        {title && <h1 className="mt-6 text-[32px] mb-4 font-bold">{title}</h1>}
        {info && (
          <p className="font-semibold text-[#969696] text-[28px]">{info}</p>
        )}
      </div>
    </div>
  );
}
