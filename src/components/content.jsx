import { MdOutlineNotificationsActive } from "react-icons/md";
import CartItem from "./cartItem";
import Button from "./ui/button";
import { RiQrScan2Line } from "react-icons/ri";
import CartRight from "./cartRight";
import { cartItems } from "../cartItems";

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
