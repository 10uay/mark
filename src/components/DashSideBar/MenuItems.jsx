import { motion } from "framer-motion";
import { GoCopilot } from "react-icons/go";
import { FaChartPie } from "react-icons/fa";
import { Link } from "react-scroll";
import { GiThink } from "react-icons/gi";


const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const items = [
  ["Services", <GoCopilot />, "services"],
  ["Projects", <FaChartPie />, "projects"],
  ["About", <GiThink />, "about"],
  ["Why work with us?"],
];

export default function MenuItems({ isOpen }) {
  return (
    <motion.ul
      variants={variants}
      className="mt-20 z-10 flex flex-col gap-5 justify-center items-center w-full capitalize text-md"
    >
      {items.map((item, index) => (
        <motion.li
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-white almarai-bold cursor-pointer py-1 pr-5 min-w-[200px] text-start"
        >
          <Link
            to={item[2] && item[2]}
            smooth={true}
            duration={500}
            className="flex items-center justify-start gap-4"
            onClick={isOpen}
          >
            <span>{item[1] && item[1]}</span>
            {item[0]}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}
