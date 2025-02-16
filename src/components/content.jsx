import { MdOutlineNotificationsActive } from "react-icons/md";
import CartItem from "./cartItem";
import Button from "./ui/button";
import { RiQrScan2Line } from "react-icons/ri";
import CartRight from "./cartRight";

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
  {
    id: 6,
    text: 'Pasteurized milk "House in the Village" 2.5%, 930 ml',
    isSea: true,
    is18: false,
    amount: 1,
    price: 7.99,
    discount: 10.99,
    fullPrice: 7.99,
  },
  {
    id: 7,
    text: "Russian Sea trout fillet piece, lightly salted, 200g",
    isSea: true,
    is18: true,
    amount: 1,
    price: 7.99,
    discount: 10.99,
    fullPrice: 7.99,
  },
  {
    id: 8,
    text: "Wine Shiraz Mr Borio's, Simonsig, 2021",
    isSea: false,
    is18: true,
    amount: 1,
    price: 7.99,
    discount: 10.99,
    fullPrice: 7.99,
  },
  {
    id: 9,
    text: "Wine Shiraz Mr Borio's, Simonsig, 2021",
    isSea: false,
    is18: false,
    amount: 1,
    price: 7.99,
    discount: 10.99,
    fullPrice: 7.99,
    status: "warn",
  },
  {
    id: 10,
    text: "Wine Shiraz Mr Borio's, Simonsig, 2021",
    isSea: false,
    is18: false,
    amount: 1,
    price: 7.99,
    discount: 10.99,
    fullPrice: 7.99,
    status: "error",
    statusText: "Pasteurized milk 'House in the Village' 2.5%, 930 ml",
    statusTextStyle: false,
  },
];

export default function Content() {
  return (
    <div className="px-9  w-full grid grid-cols-4 gap-[78px] h-[calc(100vh-98px)]">
      <div className="col-span-3 flex flex-col justify-between items-center h-[calc(100vh-98px)]">
        <div className="w-full h-[calc(100vh-98px)] overflow-y-auto p-4 scroll-hidden mb-[40px] mt-6 relative">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="sticky bottom-24 right-0 flex flex-col justify-center items-end">
            <Button
              icon={RiQrScan2Line}
              text={"Scan barcode"}
              className="text-xl border-none bg-[#CCF0C6] text-[#16692D] mb-10"
            />
            <Button
              icon={MdOutlineNotificationsActive}
              text="Сall an assistant"
              className="bg-white"
            />
          </div>
        </div>
      </div>

      <div className="col-span-1 flex flex-col justify-end h-[calc(100vh-98px)]">
        <CartRight />
      </div>
    </div>
  );
}
