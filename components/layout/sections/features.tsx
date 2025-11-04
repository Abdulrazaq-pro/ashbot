import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Droplets",
    title: "Smart Irrigation",
    description:
      "Automatically adjusts watering schedules based on soil moisture and weather data to reduce water waste.",
  },
  {
    icon: "Wifi",
    title: "IoT Connectivity",
    description:
      "Seamlessly connects sensors and controllers via Wi-Fi, enabling real-time monitoring from any device.",
  },
  {
    icon: "Cpu",
    title: "AI Optimization",
    description:
      "Uses machine learning to analyze soil and crop data for improved water efficiency and yield prediction.",
  },
  {
    icon: "Leaf",
    title: "Sustainable Farming",
    description:
      "Promotes eco-friendly water use, helping farmers conserve resources while improving productivity.",
  },
  {
    icon: "Smartphone",
    title: "Mobile Dashboard",
    description:
      "Monitor moisture levels, system performance, and irrigation history directly from your smartphone.",
  },
  {
    icon: "Users",
    title: "Community Impact",
    description:
      "Works with local NGOs and youths to distribute, maintain, and build local expertise in smart farming.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes GreenFlow Stand Out
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        GreenFlow combines AI, IoT, and sustainability to give farmers smarter
        control over irrigation — saving water, boosting yields, and empowering
        communities.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
