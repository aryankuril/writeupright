import React from 'react';

const SecondSection = () => {
  return (
    <section className="bg-[#f5f5f5]  py-10 sm:py-15 lg:py-20">

      <div className="container">

      {/* Row 1 */}
      <div className="flex flex-col md:flex-row items-center md:space-x-12  mb-10 md:mb-0">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
         <img
            src="/images/slider1.webp" // replace with your image path
            alt="Office collaboration"
            className="w-[600px] h-[300px] rounded-2xl object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#010205]">OUR MISSION</h2>
          <p className="text-lg text-black mb-4">
            A world where data breaches don’t catch you by surprise.
          </p>
          <p className="text-black leading-relaxed">
            We see a future where every person — from casual internet users to big organizations — 
            has the tools to spot stolen credentials early, act quickly, and stay ahead of hackers.
          </p>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col-reverse md:flex-row items-center md:space-x-12  mb-10 md:mb-0">
        {/* Left: Text */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#010205]">OUR VISION</h2>
          <p className="text-lg text-black mb-4">
            To make online safety something everyone can understand — and actually use.
          </p>
          <p className="text-black leading-relaxed">
            We believe you shouldn’t need to be “techy” to know if your personal details are at risk.
            That’s why we built CheckMyCreds: a simple way for anyone to stay informed and protected online.
          </p>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/slider1.webp" // replace with your image path
            alt="Office collaboration"
            className="w-[600px] h-[300px] rounded-2xl object-cover"
          />
        </div>
      </div>
</div>
    </section>
  );
};

export default SecondSection;
