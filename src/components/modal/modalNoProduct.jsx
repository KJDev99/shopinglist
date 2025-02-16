import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoBackspaceOutline } from "react-icons/io5";

export default function ModalNoProduct({ setModalAct, img, text }) {
  const [barcode, setBarcode] = useState("");

  const handleKeyPress = (value) => {
    if (barcode.length < 15) {
      setBarcode((prev) => prev + value);
    }
  };

  const handleBackspace = () => {
    setBarcode((prev) => prev.slice(0, -1));
  };

  return (
    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center px-4 z-999">
      <div className="bg-white rounded-2xl flex">
        <div className="flex flex-col rounded-l-2xl max-w-[630px] p-12">
          <h2 className="text-[32px] font-medium text-center mb-12">
            Scan the barcode on the product or enter it manually
          </h2>

          <input
            type="text"
            value={barcode}
            className="w-full px-4 py-3 border border-[#D9D9D9] rounded-xl text-[28px] font-medium bg-[#F7F6F6] mb-12"
            placeholder="Enter code"
          />

          <div className="grid grid-cols-3 gap-5 w-max mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, "clear", 0].map((key) => (
              <button
                key={key}
                className="p-4 border flex justify-center items-center cursor-pointer border-[#D9D9D9] rounded-xl text-[36px] w-[82px] h-[82px] font-semibold "
                onClick={() => {
                  if (key === "clear") handleBackspace();
                  else handleKeyPress(key.toString());
                }}
              >
                {key == "clear" ? <IoBackspaceOutline /> : key}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between mt-12 gap-6">
            <button
              className="border border-[#D9D9D9] text-[#000000] rounded-xl text-2xl font-medium w-[255px] h-[66px] cursor-pointer"
              onClick={() => {
                setModalAct(false);
              }}
            >
              Cancel
            </button>
            <button className="border border-[#CCF0C6] bg-[#CCF0C6] text-[#16692D] rounded-xl text-2xl font-medium w-[255px] h-[66px] cursor-pointer">
              OK
            </button>
          </div>
        </div>

        <div className="flex flex-col rounded-r-2xl w-[630px] p-12 bg-[#F7F6F6]">
          <div className="flex flex-col items-center justify-between  rounded-xl mt-6 ">
            {img && (
              <img
                src={img}
                alt="Product"
                className="object-contain h-[264px] w-[264px] mb-10"
              />
            )}
            {text && (
              <p className="text-[28px] font-semibold mb-6 text-center text-[#969696]">
                {text}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
