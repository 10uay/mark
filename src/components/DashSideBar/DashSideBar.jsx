// import { useRef } from "react";
import { motion,  useCycle } from "framer-motion";
// import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
// import { Navigation } from "./Navigation";
import MenuItems from './MenuItems'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
    },
  }),
  closed: {
    clipPath: "circle(20px at 221px 34px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function DashSideBar() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  // const containerRef = useRef(null);
  // const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      // custom={height}
      // ref={containerRef}
      className={` absolute top-0 right-0 ${
        isOpen ? "h-[33vh] min-w-64" : "h-[70px] delay-1000 min-w-64"
      } fixed rounded-lg overflow-hidden flex flex-col items-end justify-between z-40`}
    >
      <motion.div
        className="bg-gray-500 absolute top-0 right-0 w-full h-full"
        variants={sidebar}
      ></motion.div>
      {/* <Navigation /> */}
      <MenuToggle isOpen={() => toggleOpen()} className=" mr-5 mt-6 absolute" />
      <MenuItems isOpen={() => toggleOpen()} />
    </motion.nav>
  );
}
