import {  motion } from "framer-motion";

export default function ImageBlock({ src, alt, moreClasses, id, variants, handleImageLoad }) {
  return (
    <motion.div
      className={`image-block md:w-[200px] rounded-xl overflow-hidden ${moreClasses}`}
      variants={variants}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-72 object-cover object-right"
        id={id}
        onLoad={handleImageLoad}
      />
    </motion.div>
  );
}



