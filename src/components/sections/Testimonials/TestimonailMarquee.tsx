"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Ticker from "framer-motion-ticker";
import { cn } from "@/utils/cn.utils";
import profile1Img from "@/assets/images/testimonials/ramesh.png";
import profile2Img from "@/assets/images/testimonials/priya-singh.png";
import profile3Img from "@/assets/images/testimonials/mahesh.png";

// import { FaQuoteRight } from "react-icons/fa";
import { Quote } from "lucide-react";
import Ratings from "@/components/modules/Ratings/Ratings";
import CardTestimonial from "@/components/modules/Cards/CardTestimonial";

const cards = [
  {
    id: 1,
    name: "Rahul Verma",
    say: "I've been a sports lover all my life, and Baazi Sports has taken my passion to the next level. Their real-time fantasy games keep me on the edge of my seat, and the affordable entry fees make it accessible for everyone. The variety of deals they offer adds an exciting twist to the gameplay. Plus, the VIP rewards have given me a chance to experience the game like a true champion. Baazi Sports is my go-to platform for immersive sports entertainment!",
    profile: "profile1",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Singh",
    say: "As a student, I always thought fantasy sports were complex and expensive. But Baazi Sports changed my perception entirely. The lowest entry option means I can participate without breaking the bank. The multiple offers keep things fresh and engaging, and I'm always on the lookout for the best deals. The VIP rewards are like the cherry on top - they make me feel valued as a player. Thanks to Baazi Sports, I now have a fun and affordable way to indulge in my love for sports!",
    profile: "profile2",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Aman Patel",
    say: "Baazi Sports has redefined how I experience sports. Their live fantasy games add an element of excitement that I never knew I was missing. The affordable entry fee makes it easy for me to join in regularly. The variety of offers keeps the game interesting, and I'm always exploring new ways to enhance my gameplay. The VIP rewards program is a fantastic touch, giving me extra incentives to aim for the top spot. Baazi Sports truly knows how to cater to sports enthusiasts like me!",
    profile: "profile3",
    rating: 4,
  },
];

type ProfileType = {
  [key: string]: JSX.Element;
};

const profiles: ProfileType = {
  profile1: (
    <Image
      src={profile1Img}
      className="rounded-xl"
      alt="profile1"
      width={72}
      height={72}
    />
  ),
  profile2: (
    <Image
      src={profile2Img}
      className="rounded-xl"
      alt="profile2"
      width={72}
      height={72}
    />
  ),
  profile3: (
    <Image
      src={profile3Img}
      className="rounded-xl"
      alt="profile3"
      width={72}
      height={72}
    />
  ),
};

type TProps = {
  className?: string;
};

const TestimonialMarquee = ({ className }: TProps) => {
  return (
    <div className={cn(className)}>
      <Ticker duration={50}>
        {cards.map(
          (
            card: {
              name: string;
              say: string;
              profile?: string;
              rating: number;
            },
            index
          ) => (
            <div className="hmh-testimonial__card" key={index}>
              <CardTestimonial type={"testimonial"}>
                <Quote size={32} className="text-yellow-300" />
                <p className="font-light leading-6 hmh-clr-neutral-500">
                  {card.say}
                </p>
                <div className="flex items-center gap-4">
                  {card?.profile ? (
                    <div className="hmh-testimonial__profile">
                      {profiles[card.profile]}
                    </div>
                  ) : null}
                  <div className="hmh-testimonial__user">
                    <h4 className="hmh-fs-500 hmh-clr-primary-800">
                      {card.name}
                    </h4>
                    <Ratings value={card.rating} />
                  </div>
                </div>
              </CardTestimonial>
            </div>
          )
        )}
      </Ticker>
    </div>
  );
};

export default TestimonialMarquee;
