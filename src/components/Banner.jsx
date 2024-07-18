import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import './Banner.css'

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

export default function Banner() {
  return (
    <motion.div className="z-50" variants={banner}>
      <BannerRowTop title="Expierence" />
      <BannerRowCenter title="Branding" />
      <BannerRowBottom title="Marketing" />
    </motion.div>
  );
}

const AnimatedLetters = ({ title }) => (
  <motion.span
    className="2xl:text-9xl lg:text-6xl md:text-lg font-bold"
    variants={banner}
    initial="initial"
    animate="animate"
  >
    {[...title].map((letter, index) => (
      <motion.span
        key={index}
        variants={letterAni}
        className="inline-block relative 2xl:text-[160px] lg:text-[130px] md:text-[100px] text-[55px] z-30 text-border text-white md:h-[200px]"
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }) => (
  <div className="flex justify-between items-center md:mx-20 relative">
    <div className="overflow-hidden mx-4">
      <AnimatedLetters title={title} />
    </div>
    <motion.div
      className="absolute top-[270px] lg:relative lg:top-0 md:top-[320px] w-full md:w-fit"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.4,
      }}
    >
      <span className="block max-w-[180px] whitespace-pre-wrap font-bold text-sm overflow-hidden w-fit text-center mx-auto">
        We are specialised in setting up the foundation of your brand and
        setting you up for success.
      </span>
    </motion.div>
  </div>
);

const BannerRowCenter = ({ title }) => (
  <Marquee
    direction="left"
    speed="300"
    delay="2"
    className="overflow-hidden"
  >
    <AnimatedLetters title={title} />
  </Marquee>
);

const BannerRowBottom = ({ title }) => (
  <div className="w-fit mx-auto overflow-hidden z-30">
    <AnimatedLetters title={title} />
  </div>
);
