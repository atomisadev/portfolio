import type { Metadata } from "next";

import Herosection from "@/components/sections/home/Herosection";
import Footer from "@/components/sections/footer/Footer";

export const metadata: Metadata = {
  title: "Home | Atom",
  description: "Atom | A full-stack web developer and UI/UX designer.",
};

export default function About() {
  return (
    <>
      <Herosection />
      <Footer name="See More About Me" href="/about" />
    </>
  );
}
