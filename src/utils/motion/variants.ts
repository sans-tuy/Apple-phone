import { AnimationProps } from "framer-motion";

export const list = { hidden: { opacity: 0 } };
export const item: AnimationProps["variants"] = {
  hidden: { x: -10, opacity: 0 },
};
export const drag = (x: string, y: string, rotate: string) => {
  console.log({
    show: {
      animate: { x, y, rotate },
      transition: { type: "spring" },
    },
  });

  return {
    animate: { x, y, rotate: Number(rotate) },
    // transition: { type: "spring" },
  };
};
