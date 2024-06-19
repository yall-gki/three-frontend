import { Silkscreen } from "next/font/google";
import { cn } from "@/app/utils/tcss_util";
import { useState } from "react";
import Link from "next/link";
const silk = Silkscreen({ subsets: ["latin"], weight: "400" });

const Card = ({
  thumbnail,
  title,
  link,
  changeLink,
}: {
  thumbnail: string;
  title: string;
  link: string;
  changeLink: (link: string) => void;
}) => {
  const [focused, setFocus] = useState(false);

  const handleClick = () => {
    changeLink(link);
  };
  const handleFocus = () => {
    setFocus(false);
    setFocus(true);
    console.log("focused");
  };
  return (
    <div
      onClick={() => {
        handleClick();
        handleFocus();
      }}
      className={cn(
        `h-[140px]  bg-zinc-900 ${focused ? " outline outline-blue-500" : ""}
         
         flex flex-col justify-center items-center rounded-lg w-[80%] cursor-pointer text-slate-100 hover:text-indigo-700 transition-colors overflow-hidden`,
        silk.className
      )}
    >
      <img
        src={thumbnail}
        className="h-full w-full object-cover"
        onClick={handleFocus}
      />

      <div
        className="flex items-center justify-center title h-[50px] font-light text-sm  text-center  "
        onClick={handleFocus}
      >
        {title}
      </div>
    </div>
  );
};

export default Card;
