import React, { useState } from "react";
import Button from "../ui/button";
import { FaCheck } from "react-icons/fa";

export const cartItems = [
  {
    id: 1,
    img: "./milk.png",
    text: 'Pasteurized milk "House in the Village" 2.5%, 930 ml',
    isSea: true,
    is18: false,
    amount: 1,
    price: 7.99,
    fullPrice: 7.99,
  },
  {
    id: 2,
    img: "./sea.png",
    text: "Russian Sea trout fillet piece, lightly salted, 200g",
    isSea: true,
    is18: true,
    amount: 1,
    price: 7.99,
    discount: 10.99,
    fullPrice: 7.99,
  },
  {
    id: 3,
    img: "./wine.png",
    text: "Wine Shiraz Mr Borio's, Simonsig, 2021",
    isSea: false,
    is18: true,
    amount: 1,
    price: 7.99,
    discount: 10.99,
    fullPrice: 7.99,
  },
  {
    id: 4,
    img: "./milk.png",
    text: "Wine Shiraz Mr Borio's, Simonsig, 2021",
    isSea: false,
    is18: false,
    amount: 1,
    price: 7.99,
    fullPrice: 7.99,
    status: "warn",
  },
  {
    id: 5,
    img: "./milk.png",
    text: "Wine Shiraz Mr Borio's, Simonsig, 2021",
    isSea: false,
    is18: false,
    amount: 1,
    price: 7.99,
    discount: 10.99,
    fullPrice: 7.99,
    status: "error",
    statusText: "Pasteurized milk 'House in the Village' 2.5%, 930 ml",
    statusTextStyle: true,
  },
];

export function RadioGroup({ children, onValueChange }) {
  const [selected, setSelected] = useState(null);

  const handleChange = (value) => {
    setSelected(value);
    onValueChange(value);
  };

  return (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { selected, handleChange })
      )}
    </div>
  );
}

export function RadioGroupItem({ value, selected, handleChange }) {
  return (
    <div
      className={` w-[56px]  h-[56px] flex justify-center items-center rounded-full border-2 cursor-pointer transition-all ${
        selected === value
          ? "border-[#278541] bg-[transparent]"
          : "border-gray-400"
      }`}
      onClick={() => handleChange(value)}
    >
      {selected === value && <FaCheck className="text-[#278541]" />}
    </div>
  );
}

export default function ModalConfirm({ onConfirm, products, setModalAct }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="fixed inset-0 bg-[#33333399] bg-opacity-50 flex justify-center items-center px-4 z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-[820px]">
        <h2 className="text-[32px] font-semibold mb-12">
          Do you confirm the removal of the product?
        </h2>
        <RadioGroup onValueChange={setSelectedProduct}>
          <div className="scroll-hidden h-[430px] overflow-y-auto">
            {cartItems.map((product, index) => (
              <label
                key={index}
                className="flex items-center gap-10 p-2 border-b cursor-pointer border-[#E8E8E8]"
              >
                <img
                  src={product.img}
                  alt={product.text}
                  className="w-30 h-30 object-cover rounded"
                />
                <span className="grow-1 text-2xl font-semibold">
                  {product.text}
                </span>
                <div className="w-14 h-14">
                  <RadioGroupItem
                    value={product.id}
                    selected={selectedProduct}
                    handleChange={setSelectedProduct}
                  />
                </div>
              </label>
            ))}
          </div>
        </RadioGroup>
        <div className="flex justify-center gap-6 mt-4">
          <button
            className="border border-[#D9D9D9] text-[#000000] rounded-xl text-2xl font-semibold w-[350px] h-[66px] cursor-pointer"
            onClick={() => {
              setModalAct(false);
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(selectedProduct)}
            disabled={!selectedProduct}
            className={`flex items-center justify-center gap-2 border  rounded-xl text-2xl font-semibold w-[350px] h-[66px] cursor-pointer ${
              !selectedProduct
                ? "bg-[#F7F6F6] text-[#CACBCD] border-[#D9D9D9]"
                : "text-[#fff] bg-[#278541]"
            }`}
          >
            <FaCheck /> <span>Сonfirm</span>
          </button>
        </div>
      </div>
    </div>
  );
}
