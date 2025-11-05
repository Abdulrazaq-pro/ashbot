import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "IoT Setup",
    description:
      "We help you configure sensors and controllers to fit your unique farm layout and crop type.",
    pro: 0,
  },
  {
    title: "Functional Features",
    description:
      "Monitor soil moisture, weather, and irrigation patterns and acts based on real-time data.",
    pro: 0,
  },
  {
    title: "AI-Powered Recommendations",
    description:
      "Get smart watering and planting suggestions to boost yield and reduce water usage.",
    pro: 1,
  },
  {
    title: "Cloud-Based Monitoring",
    description:
      "Access all your farm data remotely from any device with secure cloud synchronization.",
    pro: 1,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container bg-white py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Empowering Smarter Farms
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        GreenFlow offers tailored tools and AI-driven support to help farmers
        save time, cut costs, and maximize productivity sustainably.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>

            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              Future
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
