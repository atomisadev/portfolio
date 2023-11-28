import Link from "next/link";
import Header from "@/components/overall/Header";

export default function Herosection() {
  return (
    <>
      <Header name="I'm Atom." />

      <p className="text-base font-light pt-6 text-left dark:text-white">
        I have a passion for web development and programming in general. I
        started learning how to code when I was at the ripe age of 7, when I was
        first introduced to Scratch in school. From there, I was quickly hooked
        and started tinkering around with computers and got quite good at it.
        After that, I picked up JavaScript and started making websites using
        HTML, CSS, and JS. Quickly after, I started delving deeper into other
        languages such as C#, and made plenty of games in Unity and participated
        in many game jams (Ludum Dare, GMTK Game Jam). From there, I realized
        that my main passion was designing and web development, and picked up
        React & Next.js which leads into now.
      </p>

      <p className="text-base font-light pt-4 text-left dark:text-white">
        In my free time, I listen to plenty of music, my favorite genres being
        Pop and Indie. Listening to music while doing work or coding is the
        ideal day for me.
      </p>
    </>
  );
}
