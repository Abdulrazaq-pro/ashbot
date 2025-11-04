import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is GreenFlow?",
    answer:
      "GreenFlow is an AI-powered smart irrigation system designed to help African farmers save water and boost crop yield through automated soil moisture monitoring and data-driven watering.",
    value: "item-1",
  },
  {
    question: "How does GreenFlow work?",
    answer:
      "It uses soil moisture sensors and an ESP32 controller to track water levels in real time. The system automatically activates irrigation when the soil is dry and stops when it’s optimal.",
    value: "item-2",
  },
  {
    question: "Do I need internet access to use it?",
    answer:
      "GreenFlow connects via Wi-Fi, but basic irrigation automation can still run offline. When online, data syncs to the dashboard for monitoring and analytics.",
    value: "item-3",
  },
  {
    question: "Can I monitor my farm remotely?",
    answer:
      "Yes. Through our web and mobile dashboard, you can view soil conditions, water usage, and irrigation status in real time from anywhere.",
    value: "item-4",
  },
  {
    question: "Is GreenFlow affordable for small farmers?",
    answer:
      "Absolutely. GreenFlow was built with affordability in mind. It’s cost-effective, energy-efficient, and easy to install for smallholder farmers.",
    value: "item-5",
  },
];


export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
