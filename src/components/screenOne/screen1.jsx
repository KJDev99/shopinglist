import React, { useState } from "react";
import ScreenTop from "./screenTop";
import ScreenBottomInfo from "./screenBottomInfo";
import ScreenBottomImg from "./screenBottomImg";
import ScreenBottomContent from "./screenBottomContent";

export default function Screen1() {
  const [screenInfo, setScreenInfo] = useState(false);

  return (
    <div>
      <ScreenTop />
      <div className="px-9  w-full grid grid-cols-3 gap-[78px] h-[calc(100vh-500px)]">
        <div className="col-span-2 flex flex-col h-[calc(100vh-500px)]">
          <h2 className="mt-5 text-3xl text-[#181818] font-semibold ">
            Shopping list
          </h2>
          {screenInfo ? (
            <ScreenBottomInfo />
          ) : (
            <>
              <ScreenBottomContent />
            </>
          )}
        </div>

        <div className="col-span-1 flex flex-col h-[calc(100vh-500px)] relative">
          <ScreenBottomImg warn={false} />
        </div>
      </div>
    </div>
  );
}
