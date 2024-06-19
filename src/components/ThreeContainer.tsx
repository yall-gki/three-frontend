"use client";
import { useState } from "react";
import Navigation from "./Navigation";
import ThreeLoader from "./ThreeLoader";
import { Equal, Menu, X } from "lucide-react";
const ThreeContainer: any = (data: any) => {
  const [link, setLink] = useState(
    "https://cdn.sanity.io/files/1z660tdd/production/dcade12b2af95acdd3c1a40962463e10ab8d9a38.glb"
  );

  const changeLink = (newLink: string) => {
    setLink(newLink);
    console.log(newLink);
  };
  return (
    <>
      <div className="h-screen w-screen bg-zinc-800 flex items-center justify-center overflow-hidden m-0 p-0 ">
        <Navigation changeLink={changeLink} data={data} />
        <ThreeLoader modelUrl={link} color={"#27272A"} />
      </div>
    </>
  );
};

export default ThreeContainer;
