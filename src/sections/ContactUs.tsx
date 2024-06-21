import SectionWrapper from "@/components/layouts/SectionWrapper";
import { ThemeContext } from "@/context/ThemeContext";
import { slideInTransition } from "@/motion/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { FaHeadphones, FaPhone } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { BiSolidDiscount } from "react-icons/bi";
import { MdEmail, MdSignalCellularAlt } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";
import { openExternalUrl } from "@/helpers";

export default function ContactUs() {
  const { theme } = useContext(ThemeContext);
  const handleOpenUrl = (url: string) => {
    openExternalUrl(url);
  };
  return (
    <SectionWrapper>
      <motion.section
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
        className="mt-8 transition-all duration-300 lg:mt-4"
        id="contact"
      >
        <motion.div className="col-span-2 mt-[7rem] lg:mt-0">
          <motion.div
            variants={slideInTransition("up", "tween", 0.3, 1.5)}
            className="absolute invisible lg:visible left-[10%] top-20 mx-auto bg-gradient-to-t from-transparent to-cyan-100  bg-clip-text text-7xl font-extrabold text-transparent opacity-60 lg:left-[36vw] lg:top-0"
          >
            Contact Us
          </motion.div>
          <motion.h1
            variants={slideInTransition("up", "tween", 0.5, 1.8)}
            className="absolute bottom-0 left-[20%] top-12 mx-auto text-5xl font-extrabold text-cyan-300 lg:left-[42vw] lg:top-8 "
          >
            Contact Us
          </motion.h1>
        </motion.div>

        <motion.div className="mt-40 gap-x-10 grid w-full grid-cols-1 lg:grid-cols-2 lg:px-60">
          {/* left layout */}
          <motion.div
            variants={slideInTransition("up", "tween", 1.2, 2)}
            className="flex flex-col gap-y-4 px-10"
          >
            <p className="font-semibold text-center lg:text-start text-3xl">
              Get In Touch With Us
            </p>
            <p className="text-base text-center lg:text-start w-[-330px] lg:w-[500px]">
              Is there a problem finding your dream smartphones? Need a guide in
              buying first smartphones? just contact us.
            </p>

            {/* box wrapper */}
            <div className="flex flex-col gap-y-4 items-center lg:items-start">
              {/* box first row  */}
              <div className="flex gap-x-4">
                {/* box first column */}
                <div className="border border-solid border-slate-200 flex flex-col gap-3 w-[180px] h-[130px] rounded-md p-2">
                  <div className="flex gap-x-2">
                    <div className="p-4 rounded-md bg-blue-200">
                      <FaPhone
                        color="text-cyan-400"
                        style={{ rotate: "90deg" }}
                      />
                    </div>
                    <div>
                      <p className="text-sm">Call Center</p>
                      <p className="text-xs">0878-6382-7978</p>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      handleOpenUrl(
                        "https://api.whatsapp.com/send/?phone=%2B62087863827978&text&type=phone_number&app_absent=0"
                      )
                    }
                    className="btn btn-active bg-black text-white hover:bg-white hover:text-black hover:solid"
                  >
                    Call Now
                  </button>
                </div>

                {/* box second column */}
                <div className="border border-solid border-slate-200 flex flex-col gap-3 w-[180px] h-[130px] rounded-md p-2">
                  <div className="flex gap-x-2">
                    <div className="p-4 rounded-md bg-blue-200">
                      <IoChatboxEllipses color="text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm">Chat</p>
                      <p className="text-xs">0878-6382-7978</p>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      handleOpenUrl(
                        "https://api.whatsapp.com/send/?phone=%2B62087863827978&text&type=phone_number&app_absent=0"
                      )
                    }
                    className="btn btn-active bg-black text-white hover:bg-white hover:text-black hover:solid"
                  >
                    Chat Now
                  </button>
                </div>
              </div>

              {/* box second row  */}
              <div className="flex gap-x-4">
                {/* box first column */}
                <div className="border border-solid border-slate-200 flex flex-col gap-3 w-[380px] h-[130px] rounded-md p-2">
                  <div className="flex gap-x-2">
                    <div className="p-4 rounded-md bg-blue-200">
                      <MdEmail color="text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm">Email</p>
                      <p className="text-xs">appleid_gben@email.apple.com</p>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      handleOpenUrl(
                        "mailto:appleid_gben@email.apple.com?subject=Subject%20Text&body=Body%20Text"
                      )
                    }
                    className="btn btn-active bg-black text-white hover:bg-white hover:text-black hover:solid"
                  >
                    Email Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* right layout */}
          <motion.div
            variants={slideInTransition("up", "tween", 1.2, 2)}
            className="flex flex-col gap-y-8 lg:px-10"
          >
            <div className="mt-10 lg:mt-0 px-5">
              <iframe
                className="w-[90vw] h-[300px] lg:w-[500px] lg:h-[500px]"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=JL.%20Embong%20Malang,%20No.7-21,%20Surabaya+(Apple%20)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                {/* <a href="https://www.gps.ie/">gps vehicle tracker</a> */}
              </iframe>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </SectionWrapper>
  );
}
