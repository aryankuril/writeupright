import React from "react";

const FirstSection = () => {
  return (
    <div className="text-center container py-20 px-4 flex flex-col items-center justify-center gap-3">
      <h1   className="text-[25px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[65px]
             leading-[1.05] lg:leading-[1]  text-[#1D1D1D]
             ">
        About Us
      </h1>
      <p className="text-black text-base md:text-lg max-w-2xl">
        Ever wondered if your email or password is already in the wrong hands?
      </p>
    </div>
  );
};

export default FirstSection;
