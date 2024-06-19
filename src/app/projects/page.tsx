import ThreeContainer from "@/components/ThreeContainer";
import { getClientData } from "../utils/getClientData";
import { Silkscreen } from "next/font/google";
import { cn } from "@/app/utils/tcss_util";
const silk = Silkscreen({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const page: any = async () => {
  const data = await getClientData();
  console.log(data);

  return (
    <main
      className={cn(
        "min-h-screen bg-zinc-800 flex items-center justify-center ",
        silk.className
      )}
    >
      <ThreeContainer data={data} />
    </main>
  );
};

export default page;
