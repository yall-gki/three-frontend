import { DraftingCompass, ExternalLink } from "lucide-react";
import Link from "next/link";

const Navbar: any = () => {
  return (
    <nav className="flex items-center justify-between p-4 px-8 h-[8vh] w-full text-slate-50">
      <span className="font-bold  font-sans text-2xl cursor-pointer">
        Logo.
      </span>
      <ul className="font-semibold  text-white  w-1/6 flex items-center justify-between ">
        <li className="cursor-pointer"  >Intro</li>
        <li className="cursor-pointer" >Work</li>
        <li className="cursor-pointer" >About</li>
      </ul>
      <div className="h-full w-[1/3]  flex items-center  gap-1">
        <Link href="/projects">
          <span className="font-semibold text-lg cursor-pointer ">
            Projects
          </span>
        </Link>
        <ExternalLink size="20px" />
      </div>
    </nav>
  );
};

export default Navbar;
