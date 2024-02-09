import React from "react";

const AboutIntroduction = () => {
  return (
    <section className="py-6 md:py-8 lg:pt-20 lg:pb-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="max-w-[50%]">
            <h2 className="mb-0 text-2xl md:text-4xl font-bold text-gray-800">
              The largest Slovak travel agency with 100 years of tradition
            </h2>
          </div>
          <div className="max-w-[60%]">
            <p className="mt-4 md:mt-5 mb-0 text-lg md:text-xl xl:px-2 text-gray-700">
              {" "}
              For more than 100 years, we have been bringing you unforgettable
              travel experiences and carefree holidays. Stay and sightseeing
              tours in Europe and exoticism, sightseeing, skiing and wellness
              stays have already delighted{" "}
              <b>5 generations of our satisfied clients</b>.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntroduction;
