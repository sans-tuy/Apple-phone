import SectionWrapper from "@/components/layouts/SectionWrapper";
import GLTFModel from "@/components/reusable/ModelLiveseyy";
import { ThemeContext } from "@/context/ThemeContext";
import { slideInTransition } from "@/motion/motion";
import { motion } from "framer-motion";
import { useContext } from "react";
import {
  BsCpuFill,
  BsFillCloudRainFill,
  BsFillPhoneFill,
} from "react-icons/bs";
import { FaCamera } from "react-icons/fa";
import { MdBatteryFull, MdSdStorage } from "react-icons/md";

export default function WhatsNew() {
  const { theme } = useContext(ThemeContext);
  return (
    <SectionWrapper>
      <motion.section
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
        className=" mt-0 transition-all duration-300 lg:mt-10"
        id="products"
      >
        <motion.div className="col-span-2 mt-[7rem] lg:mt-0">
          <motion.div
            variants={slideInTransition("up", "tween", 0.3, 1.5)}
            className="absolute invisible lg:visible left-[10%] top-20 mx-auto bg-gradient-to-t from-transparent to-cyan-100  bg-clip-text text-7xl font-extrabold text-transparent opacity-60 lg:left-[36vw] lg:top-0"
          >
            Whats New
          </motion.div>
          <motion.h1
            variants={slideInTransition("up", "tween", 0.5, 1.8)}
            className="absolute bottom-0 left-[20%] top-0 mx-auto text-5xl font-extrabold text-cyan-300 lg:left-[42vw] lg:top-8 "
          >
            Whats New
          </motion.h1>
        </motion.div>

        <motion.div
          variants={slideInTransition("up", "tween", 1.5, 2.5)}
          className="lg:mt-[6rem] text-xl w-full text-black text-center lg:text-start flex flex-col gap-3 items-center"
        >
          <p className="text-base w-[400px] lg:w-[500px] px-10">
            We provided a New Smartphones with many awesome features for our
            customer satisfaction
          </p>
          <p className="font-bold font-lg font-sans">Iphone 15 Pro Max</p>
        </motion.div>

        <motion.div className="mt-14 gap-x-10 grid w-full grid-cols-1 px-10 lg:grid-cols-3 lg:px-60">
          {/* left layout */}
          <motion.div
            variants={slideInTransition("up", "tween", 1.2, 2)}
            className="flex flex-col gap-y-10 order-2 lg:order-1 mt-10 lg:mt-0 "
          >
            {/* camera */}
            <div className="flex flex-col  gap-y-4">
              <div className="flex items-center gap-3 justify-center lg:justify-start lg:text-xl">
                <FaCamera />
                <p
                  className={`${
                    theme === "light" ? "text-black" : "text-white"
                  } font-bold lg:text-base`}
                >
                  48 MP Camera with telefoto 3x
                </p>
              </div>
              <p className="lg:text-start text-center">
                Comes with a triple rear camera system including a 48MP
                primary,with a 3x telephoto and 120 mm lens makes sure that you
                get the best shots in both low light and daylight settings.
              </p>
            </div>

            {/* screen */}
            <div className="flex flex-col  gap-y-4">
              <div className="flex items-center gap-3 justify-center lg:justify-start lg:text-xl">
                <BsFillPhoneFill />
                <p
                  className={`${
                    theme === "light" ? "text-black" : "text-white"
                  } font-bold lg:text-base`}
                >
                  6.7 inch OLED screen with ProMotion
                </p>
              </div>
              <p className="lg:text-start text-center">
                Provided big screen size with high resolution and displayed with
                worlds best smartphones displays
              </p>
            </div>

            {/* battery */}
            <div className="flex flex-col  gap-y-4">
              <div className="flex items-center gap-3 justify-center lg:justify-start lg:text-xl">
                <MdBatteryFull />
                <p
                  className={`${
                    theme === "light" ? "text-black" : "text-white"
                  } font-bold lg:text-base`}
                >
                  3274 mAh Battery
                </p>
              </div>
              <p className="lg:text-start text-center">
                With large of battery capacity can stand long for 29 hours for
                watch videos, makes sure that you have best experiences
              </p>
            </div>
          </motion.div>

          {/* middle layout */}
          <motion.div
            variants={slideInTransition("up", "tween", 1.2, 2)}
            className="flex flex-col gap-y-10 order-1 lg:order-2 pl-10 lg:pl-0"
          >
            <GLTFModel />
          </motion.div>

          {/* right layout */}
          <motion.div
            variants={slideInTransition("up", "tween", 1.2, 2)}
            className="flex flex-col gap-y-10 order-3 lg:order-3 mt-10 lg:mt-0 "
          >
            {/* SoC */}
            <div className="flex flex-col  gap-y-4">
              <div className="flex items-center gap-3 justify-center lg:justify-start lg:text-xl">
                <BsCpuFill />
                <p
                  className={`${
                    theme === "light" ? "text-black" : "text-white"
                  } font-bold lg:text-base`}
                >
                  Bionic A17 PRO
                </p>
              </div>
              <p className="lg:text-start text-center">
                Provided with latest chipsets transforms your device into a
                professional-quality camera, intelligent personal assistant, and
                elite gaming devices
              </p>
            </div>

            {/* storage */}
            <div className="flex flex-col  gap-y-4">
              <div className="flex items-center gap-3 justify-center lg:justify-start lg:text-xl">
                <MdSdStorage />
                <p
                  className={`${
                    theme === "light" ? "text-black" : "text-white"
                  } font-bold lg:text-base`}
                >
                  8 GB RAM & 512 GB Internal Storage
                </p>
              </div>
              <p className="lg:text-start text-center">
                We gives you very big of internal storage and RAM for maximum
                performance of our smartphones
              </p>
            </div>

            {/* ressitance */}
            <div className="flex flex-col  gap-y-4">
              <div className="flex items-center gap-3 justify-center lg:justify-start lg:text-xl">
                <BsFillCloudRainFill />
                <p
                  className={`${
                    theme === "light" ? "text-black" : "text-white"
                  } font-bold lg:text-base`}
                >
                  IP 68 Water Resistant
                </p>
              </div>
              <p className="lg:text-start text-center">
                Dive into adventure with confidence—our IP68 water-resistant
                smartphone keeps up with your wildest moments.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </SectionWrapper>
  );
}
