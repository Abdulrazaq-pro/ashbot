import { Separator } from "@/components/ui/separator";
import { Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-gradient-to-br from-muted/30 to-muted/50 dark:from-card dark:to-card/50 border border-greenflow-green-200 dark:border-greenflow-green-900/30 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Logo & Tagline */}
          <div className="col-span-1 md:col-span-1">
            <Link href="#" className="flex items-center mb-4">
              <Image 
                src="/logo.png" 
                alt="GreenFlow Logo" 
                width={400} 
                height={120}
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm font-[family-name:var(--font-inter)]">
              Smart irrigation for every African farmer.
            </p>
            
            {/* Competition Badge */}
            <div className="mt-4 inline-flex items-center gap-2 text-xs">
              <span className="text-lg">🏆</span>
              <span className="text-muted-foreground">
                Presidential Winner 2025
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
              className="text-sm text-muted-foreground hover:text-greenflow-green-600 dark:hover:text-greenflow-green-400 transition-colors"
            >
              Features
            </Link>
            <Link 
              href="#how-it-works" 
              className="text-sm text-muted-foreground hover:text-greenflow-blue-600 dark:hover:text-greenflow-blue-400 transition-colors"
            >
              How It Works
            </Link>
            <Link 
              href="#impact" 
              className="text-sm text-muted-foreground hover:text-greenflow-green-600 dark:hover:text-greenflow-green-400 transition-colors"
            >
              Impact
            </Link>
            <Link 
              href="#team" 
              className="text-sm text-muted-foreground hover:text-greenflow-blue-600 dark:hover:text-greenflow-blue-400 transition-colors"
            >
              Team
            </Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg mb-2 font-[family-name:var(--font-sora)]">
              Contact
            </h3>
            
            <a 
              href="https://wa.me/2348167191202?text=Hi%20GreenFlow%20team!"
              target="_blank"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-green-600 transition-colors group"
            >
              <MessageCircle className="size-4 group-hover:scale-110 transition-transform" />
              <span>WhatsApp</span>
            </a>
            
            <a 
              href="mailto:iaishailham@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-greenflow-blue-600 transition-colors group"
            >
              <Mail className="size-4 group-hover:scale-110 transition-transform" />
              <span>Email Us</span>
            </a>

            {/* <p className="text-xs text-muted-foreground mt-2">
              📍 Ilorin, Nigeria
            </p> */}
          </div>
        </div>

        <Separator className="my-8 bg-greenflow-green-200 dark:bg-greenflow-green-900/30" />
        
        {/* Copyright */}
        <p className="text-center text-sm text-muted-foreground font-[family-name:var(--font-inter)]">
          &copy; 2025 GreenFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
};