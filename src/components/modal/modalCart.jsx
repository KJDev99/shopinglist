import { useState } from "react";
import { FaPlus, FaMinus, FaCheck } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

export default function ModalCart({
  setModalAct,
  status,
  productImg,
  productTitle,
  info,
}) {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 7.99;
  const totalPrice = (quantity * pricePerItem).toFixed(2);

  const handleQuantityChange = (type) => {
    setQuantity((prev) => {
      if (type === "increase") return prev + 1;
      if (type === "decrease" && prev > 1) return prev - 1;
      return prev;
    });
  };

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

              {status == "add" && (
                <>
                  <p className="text-[28px] font-semibold mb-6 mt-6 text-center">
                    € {pricePerItem}
                  </p>
                  <div className="flex items-center gap-2 justify-center">
                    <button
                      className={`p-6 cursor-pointer h-[66px] rounded-[12px] ${
                        quantity > 1
                          ? "text-[#16692D] border border-[#CCF0C6] bg-[#CCF0C6]"
                          : "text-[#CACBCD] border border-[#D9D9D9] bg-[transparent]"
                      } `}
                      onClick={() => handleQuantityChange("decrease")}
                    >
                      <FaMinus />
                    </button>
                    <span className="text-[28px] font-medium border border-[#D9D9D9] h-[66px] rounded-[12px] px-10 flex items-center justify-center">
                      {quantity} pcs
                    </span>
                    <button
                      className="p-6 cursor-pointer text-[#16692D] border border-[#CCF0C6] h-[66px] bg-[#CCF0C6] rounded-[12px]"
                      onClick={() => handleQuantityChange("increase")}
                    >
                      <FaPlus />
                    </button>
                  </div>
                </>
              )}

              {quantity > 1 ? (
                <p className="text-[28px] font-semibold mb-6 mt-6 text-center">
                  € {totalPrice}
                </p>
              ) : (
                <p className="text-[28px] font-semibold mb-6 mt-6 text-center">
                  &nbsp;
                </p>
              )}
            </div>
          </div>

          {status == "add" && (
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
          {status == "delete" && (
            <div className="flex justify-center gap-6">
              <button
                className="border border-[#D9D9D9] text-[#000000] rounded-xl text-2xl font-semibold w-[255px] h-[66px] cursor-pointer"
                onClick={() => {
                  setModalAct(false);
                }}
              >
                Cancel
              </button>
              <button className="flex items-center justify-center gap-2  text-[#EC2C4F] bg-[#FFEAEA] rounded-xl text-2xl font-semibold w-[255px] h-[66px] cursor-pointer">
                <FaTrashCan /> <span>delete</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
