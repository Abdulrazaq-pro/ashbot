"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "/avatars/uncle.jpg", 
    name: "Uncle Baba'ngida",
    userName: "Family Supporter & Mentor",
    comment:
      "When Aisha and Abdulrazaq showed me GreenFlow, I was amazed. These young innovators are solving real problems for our farmers. I'm proud to see them using technology to help our community grow better crops while saving water.",
    rating: 5.0,
  },
  {
    image: "/avatars/farmer.jpg",
    name: "Alhaja Zainab Musa",
    userName: "Smallholder Farmer, Patigi",
    comment:
      "I've been farming for 30 years, always guessing when to water my tomatoes. GreenFlow changed everything. Now I have an automated system that helps me water my crops when they need water. I saved money on water bills and my harvest increased by almost 30%. This is the future of farming!",
    rating: 5.0,
  },
  {
    image: "/avatars/investor.jpg",
    name: "Dr. Fatima Adeyemi",
    userName: "AgriTech Investment Partner",
    comment:
      "GreenFlow addresses a critical challenge in African agriculture. The combination of affordable hardware, SMS capability for offline farmers, and AI predictions makes this scalable across the continent. I'm impressed by their practical approach to solving real problems.",
    rating: 5.0,
  },
  {
    image: "/avatars/farmer2.jpg",
    name: "Mallam Bello Suleiman",
    userName: "Rice Farmer, Ilorin",
    comment:  
      "Before GreenFlow, I wasted so much water and still lost crops. Now the system monitors my farm 24/7 and waters automatically. Even when I'm at the market, I get SMS alerts. My neighbors want to know how my rice looks so healthy!",
    rating: 5.0,
  },
  {
    image: "/avatars/extension-officer.jpg",
    name: "Engr. Ahmed Lawal",
    userName: "Agricultural Extension Officer",
    comment:
      "I've seen many farming technologies, but GreenFlow stands out. It's affordable, works without constant internet, and the team actually listens to farmers' needs. This is exactly what smallholder farmers need to modernize their practices.",
    rating: 5.0,
  },
  {
    image: "/avatars/mentor.jpg",
    name: "Prof. Obioma Nwankwo",
    userName: "Competition Judge & Tech Mentor",
    comment:
      "Among hundreds of innovations I've evaluated, GreenFlow impressed me most. The technical execution is solid, but what really matters is their deep understanding of African farmers' challenges. These young innovators are building something that will actually be used.",
    rating: 5.0,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-center mb-2 tracking-wider bg-gradient-to-r from-greenflow-green-500 to-greenflow-blue-500 bg-clip-text text-transparent font-semibold">
          What People Say
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4 font-[family-name:var(--font-sora)]">
          Trusted by Farmers, Mentors & Investors
        </h2>
        
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From family supporters to agricultural investors, hear what people say about GreenFlow's impact on African farming.
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-gradient-to-br from-muted/30 to-muted/50 dark:from-card dark:to-card/50 border-greenflow-green-200 dark:border-greenflow-green-900/30 h-full hover:shadow-gf-mixed transition-all duration-300">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-greenflow-green-500 text-greenflow-green-500" />
                    <Star className="size-4 fill-greenflow-green-500 text-greenflow-green-500" />
                    <Star className="size-4 fill-greenflow-green-500 text-greenflow-green-500" />
                    <Star className="size-4 fill-greenflow-green-500 text-greenflow-green-500" />
                    <Star className="size-4 fill-greenflow-green-500 text-greenflow-green-500" />
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    "{review.comment}"
                  </p>
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar className="border-2 border-greenflow-green-300 dark:border-greenflow-green-700">
                      <AvatarImage
                        src={review.image}
                        alt={review.name}
                      />
                      <AvatarFallback className="bg-gradient-to-br from-greenflow-green-500 to-greenflow-blue-500 text-white font-semibold">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg font-[family-name:var(--font-sora)]">
                        {review.name}
                      </CardTitle>
                      <CardDescription className="text-xs">
                        {review.userName}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-greenflow-green-500 hover:bg-greenflow-green-500 hover:text-white" />
        <CarouselNext className="border-greenflow-blue-500 hover:bg-greenflow-blue-500 hover:text-white" />
      </Carousel>
    </section>
  );
};