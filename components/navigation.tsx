"use client";

import { Logo } from "./svg/logo";
import { Separator } from "./ui/separator";

export function Navigation() {
  return (
    <>
      <div className="lg:mx-[15rem] p-2 flex-col justify-center md:flex-row flex md:justify-between items-center border-b">
        <div className="flex gap-10 items-center">
          <Logo />
        </div>
        <div className="flex items-center gap-5">
          <a
            href="/about"
            className="font-mono hover:text-primary transition ease-in duration-100"
          >
            &lt;About &#47;&gt;
          </a>
          <a
            href="/creator"
            className="font-mono hover:text-primary transition ease-in duration-100"
          >
            &lt;Creator &#47;&gt;
          </a>
          <a
            href="/pricing"
            className="font-mono hover:text-primary transition ease-in duration-100"
          >
            &lt;Pricing &#47;&gt;
          </a>
        </div>
      </div>
    </>
  );
}
