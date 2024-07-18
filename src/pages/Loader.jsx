import ImageBlock from "../components/ImageBlock";
import { easeInOut, motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";



export default function Loader({ setLoader }) {
  // Variants
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
      y: 200,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: easeInOut,
        duration: 1.5,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: easeInOut,
        duration: 0.5,
      },
    },
  };

  const mainItem = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: easeInOut,
        duration: 1.6,
      },
    },
  };

  const fixedClasses =
    "absolute xxl:w-[200px] xxl:h-72 xl:w-[200px] xl:h-72 lg:w-[200px] lg:h-72 md:w-[200px] md:h-60 sm:w-[200px] sm:h-60 w-[120px] h-52";

  // const { counter } = useSelector((state) => state.counter);
  // const dispatch = useDispatch()

  return (
    <motion.div
      className="relative w-screen h-screen overflow-hidden"
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      onAnimationComplete={() => setLoader(false)}
    >
      {/* <ImageBlock
        src="/images/image-1.jpg"
        alt="image-1"
        moreClasses={`
          ${fixedClasses} 
          xxl:top-14 xxl:left-52
          xl:top-10 xl:left-32
          lg:top-5 lg:left-5
          md:top-5 md:left-5
          sm:top-5 sm:left-5
          top-3 left-3
        `}
        id="image-1"
        variants={item}
        handleImageLoad={() => dispatch(counter())}
      /> */}

      {/* img 2 the main one */}
      <motion.div
        variants={mainItem}
        className="w-[600px] rounded-xl overflow-hidden absolute top-1/2 left-1/2 !transform -translate-x-1/2 -translate-y-1/2"
      >
        <motion.img
          src="/images/image-2.jpeg"
          alt="main image"
          className="object-cover object-center "
          layoutId="main-image"
        />
      </motion.div>

      <ImageBlock
        src="/images/image-3.png"
        alt="image-3"
        moreClasses={`
          ${fixedClasses} 
          xxl:top-32 xxl:right-52
          xl:top-20 xl:right-32
          lg:top-5 lg:right-5
          md:top-5 md:right-5
          sm:top-5 sm:right-5
          top-10 right-3
        `}
        id="image-3"
        variants={item}
      />
      <ImageBlock
        src="/images/image-4.png"
        alt="image-4"
        moreClasses={`
          ${fixedClasses} 
          xxl:bottom-32 xxl:left-52
          xl:bottom-20 xl:left-32
          lg:bottom-5 lg:left-5
          md:bottom-5 md:left-5
          sm:bottom-5 sm:left-5
          bottom-10 left-3
        `}
        id="image-4"
        variants={item}
      />
      {/* <ImageBlock
        src="/images/image-5.jpg"
        alt="image-5"
        moreClasses={`
          ${fixedClasses} 
          xxl:bottom-14 xxl:right-52
          xl:bottom-10 xl:right-32
          lg:bottom-5 lg:right-5
          md:bottom-5 md:right-5
          sm:bottom-5 sm:right-5
          bottom-3 right-3
        `}
        id="image-5"
        variants={item}
      /> */}
    </motion.div>
  );
}
// right-20 bottom-2