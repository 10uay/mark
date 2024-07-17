import NavBar from "../components/NavBar";
import { motion } from 'framer-motion';
import Banner from "../components/Banner";

export default function Hero({ loading }) {
  return (
    <div
      className="h-[calc(100vh+100px)] "
    >
      <NavBar />
      <Banner />
      {!loading && (
        <div className="w-full absolute md:top-[570px] top-[450px]">
          <motion.img
            src="/images/image-2.jpeg"
            alt="main image"
            className="w-[1300px] h-[500px] object-cover object-center mx-auto"
            layoutId="main-image"
          />
        </div>
      )}
    </div>
  );
}
