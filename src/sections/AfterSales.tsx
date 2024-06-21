import SectionWrapper from "@/components/layouts/SectionWrapper";
import { ThemeContext } from "@/context/ThemeContext";
import { slideInTransition } from "@/motion/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { FaHeadphones } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { BiSolidDiscount } from "react-icons/bi";
import { MdSignalCellularAlt } from "react-icons/md";

export default function AfterSales() {
  const { theme } = useContext(ThemeContext);
  return (
    <SectionWrapper>
      <motion.section
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
        className="mt-8 transition-all duration-300 lg:mt-4"
        id="aftersales"
      >
        <motion.div className="col-span-2 mt-[7rem] lg:mt-0">
          <motion.div
            variants={slideInTransition("up", "tween", 0.3, 1.5)}
            className="absolute invisible lg:visible  left-[10%] top-20 mx-auto bg-gradient-to-t from-transparent to-cyan-100  bg-clip-text text-7xl font-extrabold text-transparent opacity-60 lg:left-[36vw] lg:top-0"
          >
            After Sales
          </motion.div>
          <motion.h1
            variants={slideInTransition("up", "tween", 0.5, 1.8)}
            className="absolute bottom-0 left-[20%] top-[7rem] mx-auto text-5xl font-extrabold text-cyan-300 lg:left-[42vw] lg:top-8 "
          >
            After Sales
          </motion.h1>
        </motion.div>

        <motion.div className="mt-32 gap-x-10 grid w-full grid-cols-1 lg:grid-cols-2 lg:px-60">
          {/* left layout */}
          <motion.div
            variants={slideInTransition("up", "tween", 1.2, 2)}
            className="flex flex-col gap-y-5"
          >
            <Image
              alt="iphone-mockup"
              src={"/images/two_ip_mockup.png"}
              width={600}
              height={600}
            />
          </motion.div>

          {/* right layout */}
          <motion.div
            variants={slideInTransition("up", "tween", 1.2, 2)}
            className="flex flex-col gap-y-8 mt-10 px-10 text-center items-center lg:items-start lg:text-start"
          >
            <p className="font-semibold text-2xl lg:text-3xl">
              Excellence We Provided In Our Smartphone
            </p>
            <p className="text-base w-[350px] lg:w-[500px]">
              We offer several gifts that we have prepared if you buy our
              product that will not disappoint buyers, namely the following
              things, such as warranty, merch, and other things.
            </p>

            <div className="collapse collapse-plus bg-slate-100 ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-base font-semibold flex items-center gap-x-3">
                <PiCertificateFill className="bg-slate-50 text-2xl" />
                <p className="text-lg">2 Years of Warranty</p>
              </div>
              <div className="collapse-content bg-slate-50">
                <p className="text-sm">
                  For every purchase of our smartphone, we will provide a 2 year
                  warranty which is given in the event of damage such as system
                  damage, we will not provide a warranty if the damage that
                  occurs is the users fault
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-slate-100 ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-base font-semibold flex items-center gap-x-3">
                <FaHeadphones className="bg-slate-50 text-2xl" />
                <p className="text-lg">Free Merchandise</p>
              </div>
              <div className="collapse-content bg-slate-50">
                <p className="text-sm">
                  For every purchase of our smartphone, we will provide free
                  merchandise to our users in the form of our companys wireless
                  headset product, 2 smartphone casings according to the type of
                  smartphone purchased and free tempered glass.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-slate-100 ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-base font-semibold flex items-center gap-x-3">
                <BiSolidDiscount className="bg-slate-50 text-2xl" />
                <p className="text-lg">Discount 10% for 1000 first buyers</p>
              </div>
              <div className="collapse-content bg-slate-50">
                <p className="text-sm">
                  Especially for the first 1000 Customers purchase of our
                  smartphone product, we will give a 10% discount to our phone.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-slate-100 ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-base font-semibold flex items-center gap-x-3">
                <MdSignalCellularAlt className="bg-slate-50 text-2xl" />
                <p className="text-lg">15 GB of Free internet data</p>
              </div>
              <div className="collapse-content bg-slate-50">
                <p className="text-sm">
                  For every purchase of our smartphone, we will provide users
                  with a free internet data of 10 GB.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </SectionWrapper>
  );
}
