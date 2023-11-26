import { BackgroundBalls } from "@/components/balls";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navigation />
      <BackgroundBalls style={{ height: "80vh" }} />
    </>
  );
}
