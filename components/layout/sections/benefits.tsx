import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Droplets",
    title: "Water Efficiency",
    description:
      "AI-powered control ensures crops get just the right amount of water—saving up to 40% in usage.",
  },
  {
    icon: "Leaf",
    title: "Boosted Crop Yield",
    description:
      "Real-time soil data helps farmers grow healthier plants and achieve higher productivity.",
  },
  {
    icon: "Wifi",
    title: "IoT Connectivity",
    description:
      "Remotely monitor and manage irrigation through our connected web and mobile platforms.",
  },
  {
    icon: "Users",
    title: "Community Empowerment",
    description:
      "Trains local youths to build and maintain systems, creating jobs and sustainability in rural areas.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="px-5 py-24 sm:py-32 bg-neutral-200">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">
            Benefits
          </h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Smarter Farming, Real Impact
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            GreenFlow makes smart irrigation simple—saving water, improving yields, and empowering communities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
