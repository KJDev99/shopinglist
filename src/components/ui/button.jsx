export default function Button({
  icon: Icon,
  iconR: IconR,
  text,
  className,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`flex border border-borderGray rounded-[12px] py-4 px-[18px] items-center gap-3 cursor-pointer text-2xl ${className}`}
    >
      {Icon && <Icon className="" />}
      <span className=" font-semibold">{text}</span>
      {IconR && <IconR className="" />}
    </button>
  );
}
