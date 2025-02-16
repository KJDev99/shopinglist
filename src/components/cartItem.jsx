import { GoTrash } from "react-icons/go";
import { PiSealPercentBold, PiWarningCircleBold } from "react-icons/pi";
import { VscError } from "react-icons/vsc";

export default function CartItem({
  img,
  text,
  isSea,
  is18,
  amount,
  price,
  discount,
  fullPrice,
  status,
  statusText,
  statusTextStyle,
}) {
  return (
    <div className="flex border-b border-[#E8E8E8] justify-between">
      <div className="flex text-2xl py-4">
        <div className="flex items-center mr-16">
          {!img && status === "error" ? (
            <VscError className="text-2xl text-[#EC2C4F]" />
          ) : !img && status === "warn" ? (
            <PiWarningCircleBold className="text-2xl text-[#969696]" />
          ) : (
            <GoTrash className="cursor-pointer" />
          )}
        </div>

        {img && <img src={img} alt="" className="h-[144px]" />}

        <div className="flex flex-col mt-2">
          {text && (
            <p
              className={`text-2xl flex gap-1.5 items-center ${
                status == "warn" && "text-[#969696] font-semibold"
              } ${status == "error" && "text-[#EC2C4F] font-semibold"}`}
            >
              {" "}
              {status == "warn" && img && (
                <PiWarningCircleBold className="text-2xl" />
              )}{" "}
              {status == "error" && img && <VscError className="text-2xl" />}{" "}
              {text}
            </p>
          )}
          {statusText && (
            <p
              className={`mt-1 text-2xl font-normal items-center text-[#969696] ${
                statusTextStyle && "line-through decoration-[#EC2C4F]"
              }`}
            >
              {statusText}
            </p>
          )}

          <div className="flex gap-2 mt-2">
            {isSea && (
              <div className="bg-[#DAF5D6] py-1 px-1.5 rounded-lg flex items-center justify-center">
                <PiSealPercentBold className="text-2xl text-[#16692D]" />
              </div>
            )}

            {is18 && (
              <div className="bg-[#FFEAEA] py-1 px-1.5 rounded-lg text-xl font-semibold flex items-center justify-center text-[#EC2C4F]">
                +18
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex text-2xl gap-[60px] items-center">
        {amount && (
          <div className="flex flex-col">
            <p>{amount} pcs</p>
          </div>
        )}

        {price && (
          <div className="flex flex-col">
            <p>€ {price}</p>
            {discount && (
              <p className="text-[#969696] text-xl line-through">
                € {discount}
              </p>
            )}
          </div>
        )}

        {fullPrice && (
          <div className="flex flex-col font-semibold">
            <p>€ {fullPrice}</p>
          </div>
        )}
      </div>
    </div>
  );
}
