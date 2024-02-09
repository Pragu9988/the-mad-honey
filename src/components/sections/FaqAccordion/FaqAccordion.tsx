"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type TProps = {
  faqs: { question: string; answer: string }[];
  className?: string;
};

const Faqs = ({ faqs, className }: TProps) => {
  return (
    <section className="faqs py-6 md:py-8 lg:py-16">
      <div className="container mx-auto max-w-3xl">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => {
            return (
              <AccordionItem value={`item-${index + 1}`} key={index}>
                <AccordionTrigger className="text-lg text-gray-800 hover:no-underline hover:text-accent-800">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default Faqs;
