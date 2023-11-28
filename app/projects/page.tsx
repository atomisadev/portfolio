import type { Metadata } from "next";

import Header from "@/components/overall/Header";
import Footer from "@/components/sections/footer/Footer";

import { GridProjects } from "@/components/sections/projects/GridProjects";

export const metadata: Metadata = {
  title: "Projects | Atom",
  description:
    "Atom | I am a full-stack web developer and enjoy coding, with a little too much time on my hands.",
};

export default function Projects() {
  return (
    <>
      <Header name="Projects." />

      <GridProjects />
    </>
  );
}
