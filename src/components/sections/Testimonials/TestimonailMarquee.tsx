"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Ticker from "framer-motion-ticker";
import { cn } from "@/utils/cn.utils";
import profile1Img from "@/assets/images/testimonials/ramesh.png";
import profile2Img from "@/assets/images/testimonials/priya-singh.png";
import profile3Img from "@/assets/images/testimonials/mahesh.png";
import userSilImg from "@/assets/images/user-sil.jpg";

// import { FaQuoteRight } from "react-icons/fa";
import { Quote } from "lucide-react";
import Ratings from "@/components/modules/Ratings/Ratings";
import CardTestimonial from "@/components/modules/Cards/CardTestimonial";

const cards = [
  {
    id: 1,
    name: "Rajan Pradhan, Kathmandu",
    say: "Himalayan Mad Honey has redefined my expectations of honey. The rich texture paired with its distinctively wild flavor is simply unmatched. It’s not just about sweetness; it’s about experiencing a connection to the purity of the Himalayas with every spoonful. This honey is a true gem.",
    profile: "profile1",
    rating: 5,
  },
  {
    id: 2,
    name: "Anju Sharma, Pokhara",
    say: "There’s something special about Himalayan Mad Honey that makes it stand out. The taste is pure and earthy, with a natural sweetness that feels both nourishing and indulgent. I love that it’s crafted from the untouched Himalayan wilderness, bringing a piece of that serenity into my home.",
    profile: "profile2",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Emily Thompson, USA",
    say: "The moment I tasted Himalayan Mad Honey, I knew it was something rare. Its bold, complex flavor is unlike anything I’ve ever had, with a hint of wildness that keeps me coming back for more. It feels like you’re tasting the very essence of the Himalayas, preserved in its purest form.",
    profile: "user",
    rating: 4,
  },
  {
    id: 4,
    name: "Liam Bennett, UK",
    say: "Himalayan Mad Honey is more than just honey – it’s an experience. The deep, rich taste has a unique character that’s both soothing and invigorating. I love knowing that this honey comes from such a pristine environment, and every spoonful reminds me of the natural beauty of the Himalayas.",
    profile: "user",
    rating: 4.5,
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
  user: (
    <Image
      src={userSilImg}
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
