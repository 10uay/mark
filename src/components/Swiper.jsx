import { motion, easeInOut } from "framer-motion";
import Images from "../lib/Images";
import { useState, useRef, useEffect } from "react";

export default function Swiper() {
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
    },
    show: {
      opacity: 1,
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
    <div ref={carousel} className="overflow-hidden py-16">
      <h2 className="text-center text-[30px] font-bold uppercase">
        All Projects
      </h2>
      <br />
      <p className="text-[#171717] dark:text-[#F8F8F8] text-center text-[14px]">
        A SELECTION OF OUR CUSTOMERS
      </p>
      <p className="text-bold dark:text-[#F8F8F8] text-center text-[22px]">
        As individual as you
      </p>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        whileTap={{ cursor: "grabbing" }}
        className="flex gap-5 cursor-grab mt-10 md:pl-8 pl-3 py-4 "
      >
        {Images.map((img, index) => {
          return (
            <motion.div
              key={index}
              className="min-w-[250px]"
              variants={item}
            >
              <img
                src={img}
                alt="Swiper Img"
                className=" pointer-events-none"
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
