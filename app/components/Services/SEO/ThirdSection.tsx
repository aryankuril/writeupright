import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChartBar,
  Rocket,
  ClipboardList,
  Search,
  Zap,
} from "lucide-react";
import AnimatedTextButton from "../../button";

export default function Thirdsection() {
  const steps = [
    {
      id: 1,
      title: "Keyword Research",
      desc: "Identify high-value keywords your audience is searching for",
      icon: <Search className="w-8 h-8 text-white" />,    
      centerBox: "Balancing SEO with natural, engaging writing",
    },
    {
      id: 2,
      title: "Content Planning",
      desc: "Structure content around user intent and search patterns",
      icon: <ClipboardList className="w-8 h-8 text-white" />, 
      centerBox: "Balancing SEO with natural, engaging writing",
    },
    {
      id: 3,
      title: "Optimization",
      desc: "Add strategic keywords, headings, and meta data",
      icon: <Zap className="w-8 h-8 text-white" />, 
      centerBox: "Balancing SEO with natural, engaging writing",
    },
    {
      id: 4,
      title: "Publication",
      desc: "Launch optimized content with proper structure",
      icon: <Rocket className="w-8 h-8 text-white" />, 
      centerBox: "Balancing SEO with natural, engaging writing",
    },
    {
      id: 5,
      title: "Success",
      desc: "Monitor rankings, traffic, and engagement",
      icon: <ChartBar className="w-8 h-8 text-white" />, 
      centerBox: "Balancing SEO with natural, engaging writing",
    },
  ];

  const [active, setActive] = useState(1);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="w-full container py-10 sm:py-15 lg:py-20 flex flex-col items-center">
      <h2 className="text-center text-3xl sm:text-4xl font-semibold text-black ">Content Hero&aposs Journey</h2>
      <p className="text-gray-600 mb-10 text-center">The transformation from idea to optimized, published content</p>

      <div className="relative w-full px-6 overflow-hidden">

        {/* Desktop Background Line */}
        <div className="absolute top-[80px] left-0 w-full h-1 bg-gray-200 rounded-full hidden md:block"></div>

        {/* Desktop Animated Fill Line */}
        <motion.div
          className="absolute top-[80px] h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full hidden md:block"
          initial={{ width: 0 }}
          animate={{ width: `${((active - 1) / (steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        {/* DESKTOP STEPS */}
        <div className="hidden md:flex justify-between relative z-10 mt-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setActive(step.id)}
            >
              <motion.div
                className={`w-24 h-24 flex items-center justify-center rounded-full shadow-md transition-all ${
                  active >= step.id
                    ? "bg-gradient-to-r from-pink-500 to-purple-500"
                    : "bg-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {step.icon}
              </motion.div>
              <h3 className="mt-3 font-semibold text-center">{step.title}</h3>
              <p className="text-sm text-gray-600 text-center max-w-[140px]">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* MOBILE SLIDING BALL ANIMATION */}
        <div className="md:hidden w-full flex justify-center relative h-50 mt-6 overflow-hidden">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              initial={false}
              animate={{
                x:
                  step.id === active
                    ? 0
                    : step.id < active
                    ? -200 // Move left
                    : 200, // Move right
                opacity: step.id === active ? 1 : 0,
                scale: step.id === active ? 1 : 0.6,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute flex flex-col items-center "
            >
              <div
                className={`w-28 h-28 flex items-center justify-center rounded-full shadow-md transition-all ${
                  active >= step.id
                    ? "bg-gradient-to-r from-pink-500 to-purple-500"
                    : "bg-gray-200"
                }`}
              >
                {step.icon}
              </div>
              <h3 className="mt-3 font-semibold text-center">{step.title}</h3>
              <p className="text-sm text-gray-600 text-center max-w-[200px] mb-10">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CENTER BOX */}
        {steps.find((s) => s.id === active)?.centerBox && (
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mx-auto mt-10 p-5 bg-purple-100 text-purple-700 rounded-xl w-fit text-center"
          >
            {steps.find((s) => s.id === active)?.centerBox}
          </motion.div>
        )}
      </div>

      {/* BUTTONS */}
      <div className="flex gap-4 mt-8">
        <AnimatedTextButton
          onClick={() => setActive((p) => Math.max(1, p - 1))}
          text=" ← Previous"
          className="mt-6 bg-[#0a253b] border-2 border-white text-white"
        />

        <AnimatedTextButton
          onClick={() => setActive((p) => Math.min(steps.length, p + 1))}
          text="  Next →"
          className="mt-6 bg-[#0a253b] border-2 border-white text-white"
        />
      </div>
    </div>
  );
}