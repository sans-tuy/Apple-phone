import { ThemeContext } from "@/context/ThemeContext";
import AfterSales from "@/sections/AfterSales";
import Benefit from "@/sections/Benefit";
import ContactUs from "@/sections/ContactUs";
import Home from "@/sections/Home";
import Products from "@/sections/Products";
import WhatsNew from "@/sections/WhatsNew";
import { Inter } from "next/font/google";
import { useContext } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Landing() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`w-full flex flex-col justify-between gap-y-20 pb-8 ${
        inter.className
      } ${
        theme === "light"
          ? "bg-white text-black drop-shadow-2xl"
          : "bg-slate-900 text-white drop-shadow-2xl"
      } transition-all duration-300`}
    >
      <Home />
      <WhatsNew />
      <Products />
      <AfterSales />
      <Benefit />
      <ContactUs />
    </div>
  );
}
