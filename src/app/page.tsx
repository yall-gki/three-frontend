import DynamicThreeModelComponent from "@/components/DynamicThee";
import Navbar from "@/components/Navbar";
import ThreeLoader from "@/components/ThreeLoader";
import { Suspense } from "react";
import { getClientData } from "./utils/getClientData";
import { Bebas_Neue, Whisper } from "next/font/google";
import { cn } from "./utils/tcss_util";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  MoveUpRight,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Icons from "./utils/icons";
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });
const whisper = Whisper({ subsets: ["latin"], weight: "400" });
export default async function Home() {
  const data = await getClientData();
  console.log(data[0].ModelUrl);

  return (
    <main className="h-auto bg-zinc-800 w-full">
      <Navbar />

      <section className="lg:flex w-screen h-[92vh]  ">
        <div className="flex-1 flex   items-center justify-center px-4 sm:px-0.">
          <div className="h-[80%] w-full px-4 flex flex-col  ">
            <span
              className={cn(
                "h-auto w-full lg:text-9xl text-5xl smm  text-slate-100 p-6 ",
                bebas.className
              )}
            >
              Bold Cafting <br />
              &nbsp;&nbsp;&nbsp; & Design Art
            </span>
            <span
              className={cn(
                "h-auto w-auto text-slate-100 text-2xl sm:text-center sm:flex sm:items-center justify-center ",
                whisper.className
              )}
            >
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit <br />
              enim laudantium delectus. Iure esse libero omnis deleniti ratione
            </span>
            <div className="flex-grow text-white w-full flex flex-col justify-end p-16 ">
              {" "}
              <span className="flex-center gap-6  ">
                <Icons.instagram />
                <Icons.twitter />
                <Icons.facebook />
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center bg-zinc-800 justify-center px-4 py-6">
          <div className="lg:h-[80%] h-[25%] w-[66%] relative  bg-slate-50 rounded-[2.5rem]">
            <Suspense>
              {" "}
              <DynamicThreeModelComponent
                modelUrl={data[0].ModelUrl}
                color={"#FADB3F"}
              />
            </Suspense>
            <div className="tall_cont flex items-center justify-around flex-col  absolute bottom-0 left-0 h-1/3 w-16 bg-zinc-800 rounded-tr-3xl">
              {data?.map((item: any) => {
                return (
                  <div className="overflow-hidden font-bold text-lg relative cursor-pointer flex items-center justify-center z-20  h-11 w-11 rounded-full bg-white text-white">
                    <img
                      src="https://images.free3d.com/imgd/l41508-indoor-pot-plant-77983.png"
                      className="h-full w-full absolute object-cover "
                      alt=""
                    />
                  </div>
                );
              })}

              <div className="font-bold text-lg cursor-pointer flex items-center justify-center  z-20  h-11 w-11 rounded-full bg-white">
                <ArrowUpRight />
              </div>
            </div>

            <div className="circle absolute rounded-bl-3xl top-0 right-0 h-16 w-16 bg-zinc-800 flex items-center justify-center">
              <div className="p-2 h-11 w-11 rounded-full bg-black"></div>
            </div>
            <div className="absolute h-11 top-0 left-0 w-[ rounded-tr-3xl "></div>
          </div>
        </div>
      </section>
    </main>
  );
}
