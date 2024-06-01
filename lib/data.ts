"use client";

import { BiLogoDocker, BiLogoGoLang, BiLogoGoogleCloud, BiLogoKubernetes, BiLogoNodejs, BiLogoPython, BiLogoTypescript } from "react-icons/bi";
import {
  SiFfmpeg,
  SiJson,
  SiAdobeillustrator,
  SiPlanetscale,
  SiNextdotjs,
} from "react-icons/si";
import { GrStatusUnknownSmall } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { RiSupabaseFill } from "react-icons/ri";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BsFillHouseAddFill } from "react-icons/bs";
import { PiShirtFoldedFill } from "react-icons/pi";
import { AiFillRedditCircle, AiFillYoutube } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io5";
import { FaKey, FaMarkdown, FaRust, FaServer } from "react-icons/fa";

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
  {
    name: "Carbon Host",
    description:
      "Experience the future of deployment with Carbon. Pay-as-you-go pricing, hardware freedom, instant upgrades, and industry-leading customer support.",
    icon: FaServer,
    details: {
      about:
        "Carbon was born when Theo.gg on his stream was talking about serverless game server hosting, and how revolutionary that would be. From there, a team gathered to build an entire host from the ground up using Kubernetes to build serverless game hosting architecture.",
      tech: [
        {
          name: "Node.js",
          icon: BiLogoNodejs,
        },
        {
          name: "TypeScript",
          icon: BiLogoTypescript,
        },
        {
          name: "Go",
          icon: BiLogoGoLang,
        },
        {
          name: "Rust",
          icon: FaRust,
        },
        {
          name: "Kubernetes",
          icon: BiLogoKubernetes,
        },
        {
          name: "Docker",
          icon: BiLogoDocker,
        },
        {
          name: "Google Cloud",
          icon: BiLogoGoogleCloud,
        },

      ],
    },
    accordion: [
      {
        question: "When is Carbon releasing?",
        answer:
          "There is not a set in stone release date for Carbon, but the Beta release date is expected to be Summer 2024.",
      },
      {
        question: "What is Carbon?",
        answer:
          "Carbon is a serverless hosting provider for game servers and development environments. Carbon is initially built for developing Minecraft plugins and mods, and running large Minecraft networks. Carbon is intended to be for developers looking to easily manage their servers, allowing server admins and developers to create custom servers through the API for minigames, etc.",
      },
      {
        question: "Is Carbon open source?",
        answer:
          "Carbon is a registered corporation in the US and UK. So, internal Carbon code is not open source, rather only certain components such as the CLI and Discord bot are open source.",
      },
    ],
    github: {
      name: "Carbon Host",
      description:
        "Experience the future of deployment with Carbon. Pay-as-you-go pricing, hardware freedom, instant upgrades, and industry-leading customer support.",
      date: "Being built right now, expected Beta release Summer 2024.",
      href: "https://carbon.host",
      iconSrc: "https://cdn.internal.flyte.gg/carbon-host/favicon.png",
    },
  },
  {
    name: "Keyforge",
    description:
      "Redefined API management for developers. Quickly add API keys, rate limiting, and usage analytics to your API at any scale.",
    icon: FaKey,
    details: {
      about:
        "Keyforge was initially an internal tool built to support Carbon. Although, we decided to turn Keyforge into its own service to allow others to use. Initially, it was made to be a cheaper and more feature-packed alternative to existing service, Unkey. Now, it has turned into a public project allowing anyone to create and manage their own APIs with proper usage analytics and licensing to allow anyone to make money from their APIs.",
      tech: [
        {
          name: "Node.js",
          icon: BiLogoNodejs,
        },
        {
          name: "TypeScript",
          icon: BiLogoTypescript,
        },
        {
          name: "Go",
          icon: BiLogoGoLang,
        },
        {
          name: "Rust",
          icon: FaRust,
        },

      ],
    },
    accordion: [
      {
        question: "What is Keyforge?",
        answer:
          "Keyforge was initially an internal tool built to support Carbon. Although, we decided to turn Keyforge into its own service to allow others to use. Initially, it was made to be a cheaper and more feature-packed alternative to existing service, Unkey. Now, it has turned into a public project allowing anyone to create and manage their own APIs with proper usage analytics and licensing to allow anyone to make money from their APIs.",
      },
      {
        question: "What makes Keyforge different from Unkey?",
        answer:
          "Keyforge is different from Unkey in that it is built by a smaller team, with more functionality. Unkey has inaccurate usage analytics, meanwhile Keyforge does not. Unkey does not have a generous free plan, allowing a very small number of API key verifications per month, where Keyforge offers a very versatile free tier, and generous paid plan. This is because Keyforge was not made to milk money, it was made to support Carbon products.",
      },

    ],
    github: {
      name: "Keyforge",
      description:
        "Redefined API management for developers. Quickly add API keys, rate limiting, and usage analytics to your API at any scale.",
      date: "Beta released May 2024",
      href: "https://keyforge.cloud",
      iconSrc: "https://cdn.internal.flyte.gg/carbon-host/favicon.png",
    },
  },
];

export default projects;
