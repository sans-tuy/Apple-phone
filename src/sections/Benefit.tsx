import SectionWrapper from "@/components/layouts/SectionWrapper";
import { ThemeContext } from "@/context/ThemeContext";
import { slideInTransition } from "@/motion/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { FaCheck, FaHeadphones } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { BiSolidDiscount } from "react-icons/bi";
import { MdSignalCellularAlt } from "react-icons/md";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

export default function Benefit() {
  const { theme } = useContext(ThemeContext);
  return (
    <SectionWrapper>
      <motion.section
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
        className="mt-8 transition-all duration-300 lg:mt-4"
        id="benefits"
      >
        <motion.div className="col-span-2 mt-[7rem] lg:mt-0">
          <motion.div
            variants={slideInTransition("up", "tween", 0.3, 1.5)}
            className="absolute invisible lg:visible left-[10%] top-20 mx-auto bg-gradient-to-t from-transparent to-cyan-100  bg-clip-text text-7xl font-extrabold text-transparent opacity-60 lg:left-[36vw] lg:top-0"
          >
            Our Benefits
          </motion.div>
          <motion.h1
            variants={slideInTransition("up", "tween", 0.5, 1.8)}
            className="absolute bottom-0 left-[14vw] top-14 mx-auto text-5xl font-extrabold text-cyan-300 lg:left-[42vw] lg:top-8 "
          >
            Our Benefits
          </motion.h1>
        </motion.div>

        <motion.div className="mt-32 gap-x-10 px-10 grid w-full grid-cols-1 lg:grid-cols-2 lg:px-60">
          {/* left layout */}
          <motion.div
            variants={slideInTransition("up", "tween", 1.2, 2)}
            className="flex flex-col gap-y-8 mt-10"
          >
            <p className="font-semibold text-3xl">
              Benefits We Provided In Our Smartphone
            </p>
            <p className="text-base w-[330px] lg:w-[500px]">
              In addition to the benefits above, there are also internal
              benefits that you will get if you buy a Smartphone compared to
              other Smartphones
            </p>

            <div className="flex gap-x-4">
              <FaCheck
                className="text-blue"
                style={{ minWidth: "20px", marginTop: "2px" }}
                color="blue"
              />
              <p className="text-base">
                We gives you the best prices with high quality for any needed
                such as gaming, photography or for professional purposes.
              </p>
            </div>

            <div className="flex gap-x-4">
              <FaCheck
                className="text-blue"
                style={{ minWidth: "20px", marginTop: "2px" }}
                color="blue"
              />
              <p className="text-base">
                Our smartphones includes 5G carrier aggregation across TDD-FDD
                bands and a 5nm 5G baseband for long battery life. Plus, get the
                worlds fastest uplink & downlink 5G speeds possible.
              </p>
            </div>

            <div className="flex gap-x-4">
              <FaCheck
                className="text-blue"
                style={{ minWidth: "20px", marginTop: "2px" }}
                color="blue"
              />
              <p className="text-base">
                Up to 30% performance improvement, increasing responsiveness up
                to 20%. Make gameplay richer with 35% faster graphics rendering.
              </p>
            </div>

            <div className="flex gap-x-4">
              <FaCheck
                className="text-blue"
                style={{ minWidth: "20px", marginTop: "2px" }}
                color="blue"
              />
              <p className="text-base">
                With a Triple ISP. Capture three 4K HDR videos, or three 28 MP
                photos, at a breakthrough 2.7 gigapixels per second—35% faster
                than the predecessor.
              </p>
            </div>

            <div className="flex gap-x-4">
              <FaCheck
                className="text-blue"
                style={{ minWidth: "20px", marginTop: "2px" }}
                color="blue"
              />
              <p className="text-base">
                Security supports Truepic, a cryptography seal that ensures and
                verifies the authenticity of photos on your device. The worlds
                first camera compliant with the Content Authenticity Initiative
                (CAI).
              </p>
            </div>
          </motion.div>

          {/* right layout */}
          <motion.div
            variants={slideInTransition("up", "tween", 1.2, 2)}
            className="lg:flex flex-col gap-y-5 hidden lg:visible"
          >
            <Image
              alt="iphone-mockup"
              src={"/images/ip1.png"}
              width={400}
              height={600}
              style={{ width: "700px", height: "700px" }}
            />
          </motion.div>
        </motion.div>
      </motion.section>
    </SectionWrapper>
  );
}
