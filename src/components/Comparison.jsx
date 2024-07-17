import { motion, easeInOut } from "framer-motion";

export default function Comparison() {

  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const itemRight = {
    hidden: {
      opacity: 0,
      x: 200,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: easeInOut,
        duration: 1.5,
      },
    },
  };

  const itemLeft = {
    hidden: {
      opacity: 0,
      x: -200,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: easeInOut,
        duration: 1.5,
      },
    },
  };

  const VSrotate = {
    hidden: {
      opacity: 0,
      rotate: 360,
    },
    show: {
      opacity: 1,
      rotate: 0,
      transition: {
        ease: easeInOut,
        duration: 1.5,
      },
    },
  };

  return (
    <div className="py-16 container">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-5">
        <span className="text-center text-[30px] font-bold uppercase">
          Other Agency
        </span>
        <motion.img
          variants={VSrotate}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          src="/images/VS.svg"
          alt=""
          className="w-20"
        />
        <span className="text-center text-[30px] font-bold">Mark</span>
      </div>
      <p className="text-center">
        We treat your business as if it were our own
      </p>
      <div className="mt-10 flex flex-col md:flex-row justify-center items-center md:gap-40 gap-10">
        {/* left */}
        <div className="flex flex-col justify-center items-center gap-4">
          <span className="text-center text-[20px] font-bold">
            Other Agency
          </span>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col justify-center items-start gap-y-2"
          >
            <motion.div
              variants={itemLeft}
              className="flex justify-center items-center gap-3"
            >
              <img
                src="/images/false.svg"
                alt="x"
                className="w-5"
              />
              <span>Slow to implement</span>
            </motion.div>
            <motion.div
              variants={itemLeft}
              className="flex justify-center items-center gap-3"
            >
              <img
                src="/images/false.svg"
                alt="x"
                className="w-5"
              />
              <span>Poor communication</span>
            </motion.div>
            <motion.div
              variants={itemLeft}
              className="flex justify-center items-center gap-3"
            >
              <img
                src="/images/false.svg"
                alt="x"
                className="w-5"
              />
              <span>Inexperieneced Juniors</span>
            </motion.div>
          </motion.div>
        </div>
        {/* right */}
        <div className="flex flex-col justify-center items-center gap-4">
          <span className="text-center text-[20px] font-bold">
            Mark Creative Design
          </span>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col justify-center items-start gap-y-2"
          >
            <motion.div
              variants={itemRight}
              className="flex justify-center items-center gap-3"
            >
              <img src="/images/true.svg" alt="x" className="w-5" />
              <span>Lightning fast implementation</span>
            </motion.div>
            <motion.div
              variants={itemRight}
              className="flex justify-center items-center gap-3"
            >
              <img src="/images/true.svg" alt="x" className="w-5" />
              <span>2000 avadabiuty for partners</span>
            </motion.div>
            <motion.div
              variants={itemRight}
              className="flex justify-center items-center gap-3"
            >
              <img src="/images/true.svg" alt="x" className="w-5" />
              <span>Learnings from 250$ million in sales</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
