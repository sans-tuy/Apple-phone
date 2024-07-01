import { navbarData } from "@/constants/data";
import { ThemeContext } from "@/context/ThemeContext";
import { slideInTransition, staggerContainer } from "@/motion/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileNavbar from "../reusable/Modal";

export default function Header() {
  const { handleToggleTheme, theme } = useContext(ThemeContext);
  const [activeNav, setActiveNav] = useState("Home");
  const [isScroll, setIsScroll] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleDivClick = () => {
    // Trigger the button click when the parent div is clicked
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) setIsScroll(true);
      else setIsScroll(false);
    });
  }, []);

  useEffect(() => {
    window?.addEventListener("scroll", () => {
      // home
      const elementHome = document.getElementById("home");
      const homeComponent = elementHome?.getBoundingClientRect();
      const homeRange =
        homeComponent && homeComponent?.top + window.scrollY - 200;

      if (
        homeRange &&
        window.scrollY <= homeRange + 200 &&
        window.scrollY >= homeRange - 50
      ) {
        setActiveNav("Home");
      }

      // product
      const elementProduct = document.getElementById("products");
      const productComponent = elementProduct?.getBoundingClientRect();
      const productRange =
        productComponent && productComponent?.top + window.scrollY - 200;

      if (
        productRange &&
        window.scrollY <= productRange + 100 &&
        window.scrollY >= productRange - 100
      ) {
        setActiveNav("Products");
      }

      // after sales
      const elementAfterSales = document.getElementById("aftersales");
      const afterSalesComponent = elementAfterSales?.getBoundingClientRect();
      const afterSalesRange =
        afterSalesComponent && afterSalesComponent?.top + window.scrollY - 200;

      if (
        afterSalesRange &&
        window.scrollY <= afterSalesRange + 100 &&
        window.scrollY >= afterSalesRange - 100
      ) {
        setActiveNav("After Sales");
      }

      // benefit
      const elementBenefit = document.getElementById("benefits");
      const benefitComponent = elementBenefit?.getBoundingClientRect();
      const benefitRange =
        benefitComponent && benefitComponent?.top + window.scrollY - 200;

      if (
        benefitRange &&
        window.scrollY <= benefitRange + 100 &&
        window.scrollY >= benefitRange - 100
      ) {
        setActiveNav("Benefits");
      }

      // contact
      const elementContact = document.getElementById("contact");
      const contactComponent = elementContact?.getBoundingClientRect();
      const contactRange =
        contactComponent && contactComponent?.top + window.scrollY - 200;

      if (
        contactRange &&
        window.scrollY <= contactRange + 100 &&
        window.scrollY >= contactRange - 100
      ) {
        setActiveNav("Contact");
      }
    });
  }, []);

  const handleCLoseModal = () => {
    setIsOpenModal(false);
  };

  const removeHash = (str: string) => {
    return str.replace(/#/g, "");
  };

  const handleScroll = (event: any, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(removeHash(targetId));
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
    <motion.header
      variants={staggerContainer(0.1, 0.1)}
      viewport={{ once: true, amount: 0.25 }}
      whileInView="show"
      initial="hidden"
      className={`${
        theme === "light"
          ? `${
              isScroll
                ? "shadow-lg lg:bg-glassmorph bg-white text-black"
                : "bg-black text-white"
            } `
          : ` bg-slate-900 md:shadow-none text-white ${
              isScroll &&
              "lg:bg-glassmorph bg-slate-900 shadow-sm shadow-gray-800 "
            }`
      } lg:px-20 px-0 py-4 h-[80px] backdrop-blur-md backdrop-filter fixed top-[0px] z-[100] w-screen transition-all duration-300`}
    >
      <motion.nav
        variants={slideInTransition("down", "tween", 0.1, 0.7)}
        className="flex justify-between items-center px-4"
      >
        <span>
          <Link href="#home" className={`text-lg lg:text-[1.75rem]`}>
            <Image
              alt="apple logo"
              className="rounded-3xl object-cover"
              src="/images/png-apple-logo-9716.png"
              width={25}
              height={25}
            />
          </Link>
        </span>
        <div className="md:flex gap-8 hidden">
          {navbarData.map((val, idx) => (
            <a
              href={val.href}
              key={`list-nav-${idx}`}
              className={` p-0 m-0 h-[30px] ${
                activeNav === val.title
                  ? "animate-borderExpandWidth"
                  : "border-transparent"
              }`}
              onClick={() => {
                setActiveNav(val.title);
                handleScroll(event, val.href);
              }}
            >
              {val.title}
            </a>
          ))}
        </div>

        {/* Temporary comment dark mode */}
        {/* <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          className={`md:flex hidden ${
            theme === "dark"
              ? "bg-slate-700 border-slate-700"
              : "white border-slate-100 shadow-md"
          } rounded-full p-4 justify-center border-solid border  `}
          role="button" // Indicate that the div is a button-like element
          tabIndex={0}
          onClick={handleDivClick}
        >
          <button ref={buttonRef} onClick={handleToggleTheme}>
            {theme === "light" ? <BsMoon size="20px" /> : <CiSun size="20px" />}
          </button>
        </motion.div> */}

        <button
          className={`rounded-md px-4 py-1 text-lg btn btn-outline btn-info transition-all duration-300 ${isScroll ? " text-white" : " text-black"} `}
        >
          Login
        </button>

        {isOpenModal && <MobileNavbar close={handleCLoseModal} />}

        <button
          className={`p-2 rounded-md transition-all duration-300 sm:hidden ${
            isScroll ? "bg-white" : "bg-black"
          }`}
          onClick={() => setIsOpenModal(true)}
        >
          <RxHamburgerMenu color={isScroll ? "black" : "white"} />
        </button>
      </motion.nav>
    </motion.header>
  );
}
