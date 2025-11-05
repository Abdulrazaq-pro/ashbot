"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Inter, Sora, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section
      className={`container w-full ${inter.variable} ${sora.variable} ${spaceGrotesk.variable}`}
    >
      <div className="grid place-items-center lg:max-w-screen-xl gap-12 mx-auto py-20 md:py-32">
        {/* Text Section */}
        <div className="text-center space-y-6 md:space-y-8 px-4 text-neutral-800">
          <Badge
            variant="outline"
            className="text-sm py-2 font-[family-name:var(--font-space)] border-teal-600/50 text-teal-700 "
          >
            <span className="mr-2 text-sky-600 ">
              <Badge className="bg-teal-700/30 text-teal-100 ">New</Badge>
            </span>
            <span className="text-[8x] sm:text-sm md:text-base">
              GreenFlow – Smart Irrigation Update
            </span>
          </Badge>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-[family-name:var(--font-sora)] font-bold tracking-tight leading-snug">
            Empowering{" "}
            <span className="text-transparent px-2 bg-gradient-to-r from-teal-600 via-emerald-700 to-sky-700 bg-clip-text">
              Smart Irrigation
            </span>{" "}
            with AI
          </h1>

          <p className="max-w-screen-sm mx-auto text-lg md:text-xl text-muted-foreground font-[family-name:var(--font-inter)] text-slate-500">
            Saving water, improving yield, and helping African farmers grow
            sustainably with real-time soil insights.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
            {/* <Button className="w-full md:w-1/3 font-bold group/arrow font-[family-name:var(--font-space)] bg-gradient-to-r from-teal-700 via-emerald-700 to-blue-800 hover:opacity-90 text-white border-none shadow-md shadow-teal-900/30">
              Get Started
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-full md:w-1/3 font-bold font-[family-name:var(--font-space)] border-teal-600/40 text-sky-700 hover:bg-sky-900/10"
            >
              <Link
                href="https://github.com/nobruf/shadcn-landing-page.git"
                target="_blank"
              >
                View on GitHub
              </Link>
            </Button> */}
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full px-4 mt-10 md:mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-gradient-to-r from-blue-900/30 via-emerald-800/30 to-teal-800/30 rounded-full blur-3xl"></div>
          <Image
            width={1200}
            height={1200}
            className="w-full md:w-[1200px] mx-auto rounded-lg relative leading-none flex items-center border border-t-2 border-emerald-800/40 border-t-blue-800/30 shadow-[0_0_40px_-10px_rgba(13,148,136,0.3)]"
            src={theme === "light" ? "/hero.jpg" : "/hero.jpg"}
            alt="dashboard"
          />
          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
