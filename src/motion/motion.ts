import { Variants } from "framer-motion";

interface textProps {
  direction: string;
  type: string;
  delay: number;
  duration: number;
}

export type Direction = "up" | "down" | "left" | "right";
export type Type = "tween" | "spring";

export const cardVariants: Variants = {
  hidden: {
    y: 300,
    rotate: 0,
  },
  show: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      delay: 2,
      duration: 1,
    },
  },
};

export const slideInTransition = (
  direction: Direction,
  type: Type,
  delay: number,
  duration: number
): Variants => ({
  hidden: {
    x: direction === "right" ? "200%" : direction === "left" ? "-200%" : 0,
    y: direction === "up" ? "200%" : direction === "down" ? "-200%" : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const zoomOutTransition = (
  type: Type,
  delay: number,
  duration: number
): Variants => ({
  hidden: {
    scale: 0.3,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
    },
  },
});

export const textVariants = ({
  delay,
  direction,
  duration,
  type,
}: textProps): Variants => ({
  hidden: {
    x: direction === "right" ? "200%" : direction === "left" ? "-200%" : 0,
    y: direction === "up" ? "200%" : direction === "down" ? "-200%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export function staggerContainer(staggerChildren: any, delayChildren: any) {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
}
