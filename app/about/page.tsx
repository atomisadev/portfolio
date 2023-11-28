import type { Metadata } from "next";

import {
  BiLogoGithub,
  BiLogoBehance,
  BiCodeAlt,
  BiCalendar,
  BiBook,
  BiCodeCurly,
  BiLogoSpotify,
} from "react-icons/bi";

import Header from "@/components/overall/Header";
import Footer from "@/components/sections/footer/Footer";

import Subtitle from "@/components/sections/about/Subtitle";
import HorizentalContent from "@/components/sections/about/HorizentalContent";

export const metadata: Metadata = {
  title: "About | Atom",
  description:
    "I am a full-stack web developer and enjoy coding, with a little too much time on my hands.",
};

const overall = [
  {
    name: "Engineering",
    sub: {
      is: false,
      name: "",
    },
    description:
      "This GitHub account is used as a representation to the skill and knowledge I have about programming in general. My GitHub is where I share all of my programming adventures and the projects I undertake. Although, I have not finished plenty of projects presented on my GitHub, most of them are almost finished, with the core features finished and just a little polishing required.",
    linkText: "View GitHub",
    href: "https://github.com/atomisadev",
    target: "_blank",
    icon: BiLogoGithub,
  },
  {
    name: "Product",
    sub: {
      is: false,
      name: "",
    },
    description:
      "As a passionate advocate for open-source projects, I actively contribute and make most of my work public to benefit the community. My skills in research, product design, and coordination empower me to guide products from inception to success. With a unique blend of technical and product insight, I navigate the entire product journey, ensuring its vision remains intact and successful at every stage.",
    linkText: "View Product",
    href: "/projects",
    target: "_self",
    icon: BiCodeAlt,
  },
];

export default function About() {
  return (
    <>
      <Header name="About Me." />

      <HorizentalContent sectionId="overall" content={overall} />

      {/* <Subtitle name="My Ventures." sectionId="my-ventures" />
      <HorizentalContent content={ventures} />

      <Subtitle name="My Reads." sectionId="my-reads" />
      <HorizentalContent content={reads} />

      <Subtitle name="My Playlists." sectionId="my-playlists" />
      <HorizentalContent content={playlists} /> */}

      <Footer name="Let's Continue to Projects" href="/projects" />
    </>
  );
}
