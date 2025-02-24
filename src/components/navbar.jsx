import { GoRows } from "react-icons/go";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import Button from "./ui/button";

export default function Navbar({ screen }) {
  return (
    <div className="px-9 py-4 w-full grid grid-cols-4 bg-[#F7F6F6] gap-[78px] h-[98px]">
      {!screen ? (
        <div className="col-span-3 flex justify-between items-center">
          <h1 className="text-[32px]">
            Shopping list <span className="text-[#969696]">• Tray #1</span>
          </h1>
          <div className="flex">
            <div className="border border-[#D9D9D9] p-5 rounded-l-lg bg-white cursor-pointer">
              <GoRows className="text-xl text-[#000] " />
            </div>
            <div className="border border-[#D9D9D9] p-5 rounded-r-lg cursor-pointer">
              <TfiMenuAlt className="text-xl text-[#969696] " />
            </div>
          </div>
        </div>
      ) : (
        <div className="col-span-3 flex flex-col">
          <h1 className="text-[28px]">Featured Products</h1>
          <p className="text-[24px] text-[#969696]">
            Add the product and it will be delivered within 1 minute
          </p>
        </div>
      )}
      <div className="col-span-1 flex justify-end">
        <Button
          icon={MdOutlineNotificationsActive}
          text="Сall an assistant"
          className={"bg-[white]"}
        />
      </div>
    </div>
  );
}
