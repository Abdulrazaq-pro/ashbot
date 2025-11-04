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
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        {/* Text Section */}
        <div className="text-center space-y-8">
          <Badge
            variant="outline"
            className="text-sm py-2 font-[family-name:var(--font-space)] border-teal-600/50 text-teal-700 dark:text-teal-300"
          >
            <span className="mr-2 text-sky-600 dark:text-sky-400">
              <Badge className="bg-teal-700/30 text-teal-100 dark:text-teal-200">
                New
              </Badge>
            </span>
            <span>GreenFlow – Smart Irrigation Update</span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1 className="font-[family-name:var(--font-sora)] tracking-tight leading-[1.1]">
              Empowering
              <span className="text-transparent px-2 bg-gradient-to-r from-teal-600 via-emerald-700 to-sky-700 bg-clip-text">
                Smart Irrigation
              </span>
              with AI
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground font-[family-name:var(--font-inter)] text-slate-500 dark:text-slate-400">
            Saving water, improving yield, and helping African farmers grow
            sustainably with real-time soil insights.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow font-[family-name:var(--font-space)] bg-gradient-to-r from-teal-700 via-emerald-700 to-blue-800 hover:opacity-90 text-white border-none shadow-md shadow-teal-900/30">
              Get Started
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold font-[family-name:var(--font-space)] border-teal-600/40 text-sky-700 dark:text-sky-300 hover:bg-sky-900/10"
            >
              <Link
                href="https://github.com/nobruf/shadcn-landing-page.git"
                target="_blank"
              >
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-gradient-to-r from-blue-900/30 via-emerald-800/30 to-teal-800/30 rounded-full blur-3xl"></div>
          <Image
            width={1200}
            height={1200}
            className="w-full md:w-[1200px] mx-auto rounded-lg relative leading-none flex items-center border border-t-2 border-emerald-800/40 border-t-blue-800/30 shadow-[0_0_40px_-10px_rgba(13,148,136,0.3)]"
            src={theme === "light" ? "/image.png" : "/image.png"}
            alt="dashboard"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
