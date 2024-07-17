import GlassCard from "../components/GlassCard";
import { motion, easeInOut } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function CardsSection() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: easeInOut,
        duration: 1.5,
        type: "spring",
        stiffness: 260,
        damping: 17,
      },
    },
  };

  const [width, setWidth] = useState();
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    console.log(width);
  }, [width]);

  return (
    <div ref={carousel} className="md:mx-10 py-16 md:mt-14 overflow-hidden">
      <h2 className="text-center text-[30px] font-bold uppercase">
        Our services
      </h2>
      <br />
      <p className="text-bold dark:text-[#F8F8F8] text-center md:text-[18px] text-[17px] capitalize mx-10">
        We love challenging projects that require a comprehensive
        <br /> content stratgy,throughtful design.
      </p>
      <motion.div
        className="flex justify-center gap-7 mt-10 cursor-grab"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        drag="x"
        dragConstraints={{ right: width, left: -width }}
        whileTap={{ cursor: "grabbing" }}
      >
        {/* card one */}
        <motion.div variants={item}>
          <GlassCard
            title={"Social media markting"}
            paragraph={
              "We create content with images and video contant that is tailored to your offer and your target group."
            }
          >
            <div className="relative w-fit mx-auto">
              {/* small-circle */}
              <span
                className="block w-[90px] h-[90px] bg-[#FFCD05] rounded-full border-white border-2
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              ></span>
              {/* big-circle */}
              <span className=" block w-[208px] h-[208px] bg-[#FFCD05] opacity-50 rounded-full"></span>
              {/*  */}
              {/* boxes */}
              <div className="absolute top-[44%] left-[44%] -translate-x-1/2 -translate-y-1/2 transform rotate-[45deg] text-[18px] flex justify-center items-center gap-x-24">
                <span className="py-1 px-4 rounded-[10px] border-[1px]">
                  Behance
                </span>
                <span className="py-1 px-4 rounded-[10px] border-[1px]">
                  Insta
                </span>
              </div>
              <div className="absolute bottom-[54%] right-[47%] translate-x-1/2 translate-y-1/2 transform -rotate-[45deg] text-[18px] flex justify-center items-center gap-x-24">
                <span className="py-1 px-4 rounded-[10px] border-[1px]">
                  Dribble
                </span>
                <span className="py-1 px-4 rounded-[10px] border-[1px]">
                  Facebook
                </span>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* card two */}
        <motion.div variants={item}>
          <GlassCard
            title={"Web desgin"}
            paragraph={
              "We develop websites and online shaps that turn visitors into customers."
            }
          >
            <div className=" relative flex flex-col justify-start gap-4 mt-20">
              {/* design */}
              <span className="block border-white rounded-[60px] text-[25px] px-6 py-1 bg-[#fce37e] w-1/2 border-[1px] text-center dark:text-[#494949]">
                Design
              </span>
              {/* coding */}
              <span className="block border-white rounded-[60px] text-[25px] px-6 py-1 bg-[#fce37e] w-1/2 ml-auto border-[1px] text-center dark:text-[#303030]">
                Coding
              </span>

              {/* user testing */}
              <span className="block border-white rounded-[60px] text-[25px] px-6 py-1 bg-[#fce37e] w-fit border-[1px] text-center dark:text-[#161616]">
                User Testing
              </span>
            </div>
          </GlassCard>
        </motion.div>

        {/* card three */}
        <motion.div variants={item}>
          <GlassCard
            title={"Logo design "}
            paragraph={
              "We create your professional logo without compromise Individual and in the best quality."
            }
          >
            <div className="my-10 relative flex flex-col justify-center items-center gap-7">
              {/* ps */}
              <span className="w-[100px] h-[100px] text-[32px] bg-[#fce37e] border-white border-2 flex justify-center items-center trnsform -translate-x-14 translate-y-7 dark:text-[#494949]">
                Ps
              </span>
              {/* ae */}
              <span className="w-[100px] h-[100px] text-[32px] bg-[#fce37e] border-white border-2 flex justify-center items-center translate-x-14 -translate-y-7 dark:text-[#161616]">
                Ae
              </span>
            </div>
          </GlassCard>
        </motion.div>
      </motion.div>
    </div>
  );
}
