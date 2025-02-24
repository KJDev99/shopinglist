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

export default function ScreenTop() {
  return (
    <div className="w-full overflow-x-auto p-4 scroll-hidden bg-[#F7F6F6] pt-8 pb-11">
      <div className="flex gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col  !w-[300px] items-center bg-[#E2F2F8] p-4 rounded-xl shadow-md"
          >
            <img src={product.img} alt="Product" className="w-[180px] mr-4" />
            <div className="flex-1 w-[280px]">
              <p className="text-xl font-semibold">{product.name}</p>
              <div className="flex justify-between mt-3">
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
    </div>
  );
}
