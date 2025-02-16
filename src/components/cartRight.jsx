import { FaShoppingCart } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

const products = [
  {
    id: 1,
    name: 'Pasteurized milk "House in the Village" 2.5%, 930 ml',
    price: "€ 1.55",
    img: "/cartright.png",
  },
  {
    id: 2,
    name: 'Pasteurized milk "House in the Village" 2.5%, 930 ml',
    price: "€ 3.49",
    img: "/cartright.png",
  },
  {
    id: 3,
    name: 'Pasteurized milk "House in the Village" 2.5%, 930 ml',
    price: "€ 7.99",
    img: "/cartright.png",
  },
  {
    id: 4,
    name: 'Pasteurized milk "House in the Village" 2.5%, 930 ml',
    price: "€ 7.99",
    img: "/cartright.png",
  },
];

export default function CartRight() {
  return (
    <div className="w-full h-[calc(100vh-98px)] overflow-y-auto p-4 scroll-hidden mt-6 mb-[150px]">
      <h2 className="text-[32px] font-semibold mb-1">Featured Products</h2>
      <p className="text-[#969696] text-2xl mb-4">
        Add the product and it will be delivered within 1 minute
      </p>
      <div className="flex flex-col gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center bg-[#E2F2F8] p-4 rounded-xl shadow-md"
          >
            <img src={product.img} alt="Product" className="w-[106px] mr-4" />
            <div className="flex-1">
              <p className="text-xl font-semibold">{product.name}</p>
              <div className="flex justify-between mt-12">
                <p className="text-2xl font-bold mt-1">{product.price}</p>
                <div className="bg-[#278541] flex gap-2 text-white py-3 px-4 rounded-xl mr-2">
                  <IoMdAdd className="text-2xl" />
                  <PiShoppingCartSimpleBold className="text-2xl" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg_linear_btn sticky bottom-0 mt-6 flex items-center justify-center rounded-xl shadow-md cursor-pointer">
        <img src="/discount.png" alt="Card Icon" className=" h-full mr-4" />
        <p className="text-2xl font-semibold text-[#16692D]">
          Scan your card or coupon
        </p>
      </div>
    </div>
  );
}
