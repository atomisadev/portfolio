"use client";

import { BiLogoNodejs, BiLogoPython, BiLogoTypescript } from "react-icons/bi";
import {
  SiFfmpeg,
  SiJson,
  SiAdobeillustrator,
  SiPlanetscale,
} from "react-icons/si";
import { GrStatusUnknownSmall } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { RiSupabaseFill } from "react-icons/ri";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BsFillHouseAddFill } from "react-icons/bs";
import { PiShirtFoldedFill } from "react-icons/pi";
import { AiFillRedditCircle, AiFillYoutube } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io5";
import { FaMarkdown } from "react-icons/fa";

import { VitalBurstIcon } from "@/components/overall/Icons";

const projects = [
  {
    name: "Annotate CLI",
    description:
      "Annotate is an open-source program. It is a neat little project I used internally to convert my markdown school notes into working HTML sites.",
    icon: FaMarkdown,
    details: {
      about:
        "Annotate was intially created as an internal tool I used to convert my school notes into editable HTML files. From there, I decided it would be cool if I could release it to others. As of right now, the code is quite old and isn't up to the current verison I'm using with custom table of contents, hot-module replacement, etc. so once I am done publicly integrating those features will be when this project gets an upgrade.",
      tech: [
        {
          name: "Node.js",
          icon: BiLogoNodejs,
        },
        {
          name: "TypeScript",
          icon: BiLogoTypescript,
        },
      ],
    },
    accordion: [
      {
        question: "How to install Annotate?",
        answer:
          "You can install Annotate from the npm library. From there, just run the commands as instructed on the README.md file.",
      },
      {
        question: "How to use Annotate?",
        answer:
          "You can use Annotate by following the instructions on the README.md file. Run the commands as instructed on the file to learn how to define input and output directories and how to serve your compiled website.",
      },
      {
        question: "How to contribute to Annotate?",
        answer:
          "You can contribute to Annotate by forking the repository and creating a pull request, or by creating an issue on the Issues Page.",
      },
    ],
    github: {
      name: "Annotate",
      description:
        "Annotate is an open-source program. It is a neat little project I used internally to convert my markdown school notes into working HTML sites.",
      date: "Created on September 2021",
      href: "https://github.com/atomisadev/annotate",
      iconSrc: "https://github.com/markdown.png",
    },
  },
];

export default projects;
