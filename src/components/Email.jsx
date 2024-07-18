import { Button, Input } from "@relume_io/relume-ui";
import { motion, easeInOut } from "framer-motion";

export default function Email(props) {
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
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: easeInOut,
        duration: 1.5,
      },
    },
  };

  const itemLeft = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: easeInOut,
        duration: 1.5,
      },
    },
  };

  const { heading, description, inputPlaceholder, button, termsAndConditions } =
    {
      ...Cta8Defaults,
      ...props,
    };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 max-w-20 container">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className=" grid w-full grid-cols-1 items-center justify-between gap-6 md:gap-x-12 md:gap-y-8 lg:grid-cols-[1fr_max-content] lg:gap-x-20"
      >
        <motion.div variants={itemLeft} className="w-full max-w-lg">
          <h2 className="mb-3 text-[30px] font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl md:text-start text-center">
            {heading}
          </h2>
          <p className="md:text-md w-fit md:mx-0 mx-auto">{description}</p>
        </motion.div>
        <motion.div
          variants={itemRight}
          className="bg-myYellow p-5 outline outline-[1.5px] dark:outline-myYellow outline-black border-8 border-white dark:border-[#131313] w-fit mx-auto md:mx-0"
        >
          <div className="mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4 ">
            <Input
              type="email"
              placeholder={inputPlaceholder}
              className=" border-none outline-none rounded-[7px]"
            />
            <Button {...button} className="rounded-[7px]">
              {button.title}
            </Button>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: termsAndConditions }}
            className="text-black"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

const Cta8Defaults = {
  heading:
    "Successful websites create trust are understandable easy to use and most importantly effective.",
  description: "Just mail us!",
  inputPlaceholder: "Enter your email",
  button: { title: "Sign up" },
  termsAndConditions: `
    <p class='text-xs'>
      By clicking Sign Up you're confirming that you agree with our
      <a href='#' class='underline focus-visible:outline-none'>Terms and Conditions</a>.
    </p>`,
};
