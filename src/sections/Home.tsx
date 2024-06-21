import { homeData } from "@/constants/data";
import { ThemeContext } from "@/context/ThemeContext";
import { slideInTransition } from "@/motion/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import Typewriter from "typewriter-effect";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  const { profil_image, slogan } = homeData;
  const handleScroll = (event: any) => {
    event.preventDefault();
    const targetElement = document.getElementById("products");
    if (targetElement) {
      const topPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - 200;

      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="bg-black px-1 lg:px-40 py-8 grid grid-cols-1 transition-all duration-300 lg:h-[80vh] lg:grid-cols-2"
        id="home"
      >
        <div className="flex flex-col flex-wrap gap-2 lg:max-w-[600px] lg:gap-6">
          <motion.div
            variants={slideInTransition("up", "tween", 1.3, 2)}
            className={`text-base font-semibold ${
              theme === "light" ? "text-neutral-500" : "text-neutral-400"
            } text-center lg:text-start`}
          >
            STARTED AT{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              60%
            </span>{" "}
            OFF & FREE SHIPPING
          </motion.div>
          <motion.div
            variants={slideInTransition("up", "tween", 1.4, 2)}
            className="text-center text-5xl font-bold text-white lg:text-start lg:text-5xl lg:uppercase"
          >
            Discover Most Intelligent Smartphone
          </motion.div>
          <motion.div
            variants={slideInTransition("up", "tween", 1.6, 2)}
            className="text-center text-red-300 text-2xl font-semibold lg:text-start "
          >
            <Typewriter
              options={{
                strings: slogan,
                autoStart: true,
                loop: true,
                deleteSpeed: 8,
              }}
            />
          </motion.div>
          <motion.p
            variants={slideInTransition("up", "tween", 1.7, 2.1)}
            className="p-8 text-center text-neutral-500 lg:p-0 lg:text-start"
          >
            Find a variety of smartphones that suit you very easily, forget all
            difficulties in finding a gadgets for you.
          </motion.p>
          {/* <Button title="Get Started" Icon={BsWhatsapp} action="regular" /> */}
        </div>
        <motion.div
          variants={slideInTransition("right", "tween", 0.8, 1.3)}
          className="flex w-full justify-center p-4 lg:p-0"
        >
          <Image
            alt="foto profil"
            className="rounded-3xl object-contain"
            src={profil_image}
            width={400}
            height={475}
            priority={true}
          />
        </motion.div>
      </motion.section>
      <div className=" lg:absolute lg:bottom-[-4rem] p-8 lg:left-[15vw] lg:rounded-xl bg-white lg:shadow-md w-[400px] lg:w-[70vw] lg:drop-shadow-sm text-center text-3xl font-bold text-cyan-500 flex justify-around">
        <div>
          <p>2K+</p>
          <p className="text-sm text-slate-500"> Premium Products</p>
        </div>
        <div>
          <p>500K+</p>
          <p className="text-sm text-slate-500"> Happy Customers</p>
        </div>
        <div>
          <p>3K+</p>
          <p className="text-sm text-slate-500"> Outlet Branches</p>
        </div>
      </div>
    </div>
  );
}
