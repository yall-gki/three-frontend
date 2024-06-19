import { Equal, Search, X } from "lucide-react";
import Link from "next/link";
import Card from "@/components/Card";
import { Silkscreen } from "next/font/google";
import { cn } from "@/app/utils/tcss_util";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const silk = Silkscreen({ subsets: ["latin"], weight: "400" });

const Navigation: any = ({
  changeLink,
  data,
}: {
  changeLink: () => void;
  data: any;
}) => {
  const [active, setActive] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const inputDiv: any = useRef(null);
  useEffect(() => {
    const handleOutisideClick = (e: Event) => {
      if (inputDiv.current && !inputDiv.current.contains(e.target)) {
        setActive(false);
      }
    };

    document.addEventListener("mousedown", handleOutisideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutisideClick);
    };
  }, []);
  const changeInputState = () => {
    setActive(true);
    if (active && inputDiv.current) inputDiv.current.focus();
  };

  const filteredSearch = data.data.filter((model: any) =>
    model.title.toLowerCase().includes(searchInput.toLowerCase())
  );
  console.log(filteredSearch);

  return (
    <>
      <div
        className={cn(
          "w-1/4 h-full flex flex-col border-r-2 border-[#3f3f3f] ",
          silk.className
        )}
      >
        <div className="h-[50px] w-full flex items-center justify-center text-slate-200 text-lg border-b-2 border-[#3f3f3f] ">
          Models
        </div>
        <div className="h-[85px]    w-full flex items-center border-b-2 border-[#3f3f3f]   ">
          {active ? (
            <input
              ref={inputDiv}
              type="text"
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
              className="h-full²&+
     bg-transparent outline-none p-2 px-4 w-full text-slate-100 text-md rounded-md "
              autoFocus
            />
          ) : (
            <span
              className="h-full w-full flex items-center px-4"
              onClick={changeInputState}
            >
              {" "}
              <Search color="whitesmoke" size={20} />
            </span>
          )}
        </div>{" "}
        <div className="h-full w-full flex flex-col items-center gap-5 pt-6   ">
          {filteredSearch?.map((item: any) => {
            return (
              <Card
                thumbnail={item.ThmUrl}
                link={item.ModelUrl}
                title={item.title}
                changeLink={changeLink}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navigation;
