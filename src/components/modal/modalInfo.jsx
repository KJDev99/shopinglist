import React from "react";

export default function ModalInfo({
  setModalAct,
  status,
  productImg,
  productTitle,
  info,
  buttonText,
}) {
  return (
    <div className="fixed inset-0 bg-[#33333399] bg-opacity-50 flex justify-center items-center px-4 z-999">
      <div className="bg-white rounded-2xl shadow-lg flex">
        <div className="flex flex-col rounded-2xl max-w-[630px] p-12 bg-[#F7F6F6]">
          <div className="flex flex-col items-center justify-between  rounded-xl mt-6 ">
            <img
              src={productImg}
              alt="Product"
              className="object-contain h-[264px] w-[264px] mb-10"
            />
            <div className="flex flex-col flex-1 ">
              <p className="text-[28px] font-semibold mb-6 text-center">
                {productTitle}
              </p>
              {info && (
                <p className="text-[28px] text-[#969696] font-semibold mb-6 text-center">
                  {info}
                </p>
              )}
            </div>
          </div>

          {status == "check" && (
            <div className="flex justify-center gap-6">
              <button
                className="border border-[#D9D9D9] text-[#000000] rounded-xl text-2xl font-semibold w-[255px] h-[66px] cursor-pointer"
                onClick={() => {
                  setModalAct(false);
                }}
              >
                Cancel
              </button>
              <button className="flex items-center justify-center gap-2 border text-[#fff] bg-[#278541] rounded-xl text-2xl font-semibold w-[255px] h-[66px] cursor-pointer">
                <FaCheck /> <span>Сonfirm</span>
              </button>
            </div>
          )}
          {status == "info" && (
            <div className="flex justify-center gap-6">
              <button
                className="border border-[#D9D9D9] text-[#000000] rounded-xl text-2xl font-semibold w-[255px] h-[66px] cursor-pointer"
                onClick={() => {
                  setModalAct(false);
                }}
              >
                {buttonText}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
