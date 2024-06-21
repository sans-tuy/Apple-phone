import { ThemeContext } from "@/context/ThemeContext";
import Head from "next/head";
import { PropsWithChildren, useContext, useEffect, useState } from "react";
import { FiArrowUpCircle } from "react-icons/fi";
import Footer from "./Footer";
import Header from "./Header";
import { navbarData } from "@/constants/data";

export interface ThemeProps {
  theme: string;
  handleToggleTheme: () => void;
}

export default function Layout(props: PropsWithChildren) {
  const { children } = props;
  const [isScroll, setIsScroll] = useState(false);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    window?.addEventListener("scroll", () => {
      if (window.scrollY > 100) setIsScroll(true);
      else setIsScroll(false);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Apple Phone</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Anwar sanusi" />
        <meta
          name="description"
          content="This is official website of Apple Phone."
        />
      </Head>
      <Header />
      {isScroll && (
        <div className="fixed bottom-20 right-10 z-[120]">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <FiArrowUpCircle size="40px" className="absolute right-0" />
          </button>
        </div>
      )}
      <main
        className={`${
          theme === "light"
            ? "bg-white drop-shadow-2xl"
            : "bg-slate-900 drop-shadow-2xl"
        } overflow-hidden pt-[80px] transition-all duration-300`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
