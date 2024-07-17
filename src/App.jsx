import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Loader from "./pages/Loader";
import Hero from "./pages/Hero";
import CardsSection from "./components/CardsSection";
import { useEffect, useState } from "react";
import Swiper from "./components/Swiper";
import Comparison from "./components/Comparison";
import FooterM from "./components/FooterM";
import Email from "./components/Email";
import LoaderC from "./pages/LoaderC";
import { Element } from "react-scroll";

function App() {
  const [loader, setLoader] = useState(true);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <LayoutGroup>
      <AnimatePresence>
        {loading && <LoaderC />}
        {!loading && (
          <>
            {loader ? (
              <motion.div key="loader">
                <Loader setLoader={setLoader} />
              </motion.div>
            ) : (
              <div>
                <Hero loading={loader} />
                <Element name="services">
                  <CardsSection />
                </Element>

                <Element name="projects">
                  <Swiper />
                </Element>

                <Element name="about">
                  <Comparison />
                </Element>

                <Element name="email">
                  <Email />
                </Element>

                <FooterM />
              </div>
            )}</>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}

export default App;
