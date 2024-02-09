import React from "react";
import Image from "next/image";

type TProps = {
  title: string;
  strapline: string;
  image: any;
};

const IntroBanner = ({ title, strapline, image }: TProps) => {
  return (
    <div className="grid grid-cols-2 bg-primary-700 h-80">
      <div className="content flex flex-col items-center justify-center text-center max-w-2xl ml-auto p-6 md:p-12">
        <h5 className="strapline uppercase text-lg tracking-widest">
          {strapline}
        </h5>
        <h1 className="title text-5xl font-bold text-white uppercase leading-snug">
          {title}
        </h1>
      </div>
      <div className="image relative">
        <Image src={image} alt="Satur About" className="object-cover" fill />
      </div>
    </div>
  );
};

export default IntroBanner;
