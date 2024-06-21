import { navbarData } from "@/constants/data";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { BsMoon } from "react-icons/bs";
import { CiSun } from "react-icons/ci";
import { useContext, useRef } from "react";
import { ThemeContext } from "@/context/ThemeContext";

interface Props {
  close: () => void;
}
export default function MobileNavbar(props: Props) {
  const { close } = props;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const darkRef = useRef<HTMLButtonElement>(null);
  const { theme, handleToggleTheme } = useContext(ThemeContext);
  const handleDivClick = () => {
    // Trigger the button click when the parent div is clicked
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };

  const handleToggleDark = () => {
    // Trigger the button click when the parent div is clicked
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };

  return (
    <div
      className="flex items-center justify-center text-black fixed z-[1000] top-0 left-0 w-full h-screen backdrop-blur backdrop-filter  transition-all duration-300  "
      onClick={handleDivClick}
      role="button"
      tabIndex={0}
    >
      <div
        className={`relative border border-solid ${
          theme === "light"
            ? "bg-white border-neutral-200"
            : "bg-slate-900 border-neutral-700 text-white"
        } border-neutral-200 w-[80%] md:w-1/2 flex flex-col p-4 shadow-md items-center gap-4 rounded-lg pt-8 animate-fromTopAnimation transition-all duration-300 `}
      >
        <button
          onClick={close}
          ref={buttonRef}
          className="absolute top-3 right-3 "
        >
          <RxCross2 color="red" />
        </button>
        {navbarData.map((val, idx) => (
          <Link href={val.href} key={`list-nav-${idx}`}>
            {val.title}
          </Link>
        ))}

        <div
          className={`${
            theme === "dark"
              ? "bg-slate-900 border-slate-700"
              : "white border-slate-100"
          } rounded-full flex p-2 w-12 h-12 justify-center border-solid border  `}
          role="button" // Indicate that the div is a button-like element
          tabIndex={0}
          onClick={handleToggleDark}
        >
          <button ref={darkRef} onClick={handleToggleTheme}>
            {theme === "light" ? <BsMoon size="20px" /> : <CiSun size="20px" />}
          </button>
        </div>
      </div>
    </div>
  );
}
