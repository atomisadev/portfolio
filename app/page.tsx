import { BackgroundBalls } from "@/components/balls";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="relative h-[80vh]">
        <div className="absolute w-full h-full">
          <BackgroundBalls style={{ height: "100%" }} />
        </div>
        <div className="absolute w-full h-[30vh] flex items-center justify-center">
          <p className="text-2xl">Atom</p>
        </div>
      </div>
    </>
  );
}
