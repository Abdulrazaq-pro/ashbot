import { Separator } from "@/components/ui/separator";
import { Droplet, Sprout } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-gradient-to-br from-muted/30 to-muted/50 dark:from-card dark:to-card/50 border border-greenflow-green-200 dark:border-greenflow-green-900/30 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Tagline */}
          <div className="col-span-1 md:col-span-2">
            <Link href="#" className="flex items-center mb-4">
              <Image 
                src="/logo.png" 
                alt="GreenFlow Logo" 
                width={400} 
                height={120}
                className="h-24 w-auto"
              />
            </Link>
            <p className="text-muted-foreground max-w-md font-[family-name:var(--font-inter)]">
              Smart irrigation for every African farmer. Saving water, increasing yields, 
              and building a sustainable future through AI-powered agriculture technology.
            </p>
            
            {/* Competition Badge */}
            <div className="mt-4 inline-flex items-center gap-2 text-sm">
              <span className="text-xl">🏆</span>
              <span className="text-muted-foreground">
                Presidential AI & Robotics Competition Winner 2025
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-2 font-[family-name:var(--font-sora)]">
              Quick Links
            </h3>
            <Link 
              href="#features" 
              className="text-muted-foreground hover:text-greenflow-green-600 dark:hover:text-greenflow-green-400 transition-colors"
            >
              Features
            </Link>
            <Link 
              href="#how-it-works" 
              className="text-muted-foreground hover:text-greenflow-blue-600 dark:hover:text-greenflow-blue-400 transition-colors"
            >
              How It Works
            </Link>
            <Link 
              href="#impact" 
              className="text-muted-foreground hover:text-greenflow-green-600 dark:hover:text-greenflow-green-400 transition-colors"
            >
              Impact
            </Link>
            <Link 
              href="#team" 
              className="text-muted-foreground hover:text-greenflow-blue-600 dark:hover:text-greenflow-blue-400 transition-colors"
            >
              Team
            </Link>
            <Link 
              href="#contact" 
              className="text-muted-foreground hover:text-greenflow-green-600 dark:hover:text-greenflow-green-400 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        <Separator className="my-8 bg-greenflow-green-200 dark:bg-greenflow-green-900/30" />
        
        {/* Copyright */}
        <section className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p className="font-[family-name:var(--font-inter)]">
            &copy; 2025 GreenFlow. All rights reserved.
          </p>
          {/* <p className="flex items-center gap-2">
            Built with
            <Droplet className="size-4 text-greenflow-blue-500" />
            and
            <Sprout className="size-4 text-greenflow-green-500" />
            in Ilorin, Nigeria
          </p> */}
        </section>
      </div>
    </footer>
  );
};