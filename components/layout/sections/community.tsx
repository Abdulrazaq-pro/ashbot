import { Leaf, Droplets, Sprout } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const CommunitySection  = () => {
  return (
    <section id="reflection" className="py-12">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-gradient-to-br from-greenflow-green-50 to-greenflow-blue-50 dark:from-greenflow-green-950/20 dark:to-greenflow-blue-950/20 border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center font-[family-name:var(--font-sora)]">
                {/* Icon trio representing water, growth, and agriculture */}
                <div className="flex gap-4 mb-6">
                  <Droplets className="size-12 text-greenflow-blue-500" />
                  <Sprout className="size-12 text-greenflow-green-500" />
                  <Leaf className="size-12 text-greenflow-green-600" />
                </div>
                <div>
                  Imagine a Future Where
                  <span className="pl-2 text-neutral-600">
                    Every Farmer Thrives
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground font-[family-name:var(--font-inter)] space-y-4">
              <p>
                What if no farmer had to guess when to water their crops? 
                What if water scarcity was no longer a barrier to feeding Africa?
              </p>
              <p className="text-lg">
                GreenFlow isn't just technology—it's a movement toward sustainable agriculture, 
                empowering smallholder farmers with the tools they deserve.
              </p>
              <p className="text-base italic text-muted-foreground/80 pt-4">
                Let that vision settle in. We're building it, one farm at a time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};