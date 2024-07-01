import SectionWrapper from "@/components/layouts/SectionWrapper";
import { ThemeContext } from "@/context/ThemeContext";
import { slideInTransition } from "@/motion/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { Fragment, useContext, useMemo, useState } from "react";
import { FaCheck, FaHeadphones } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { BiSolidDiscount } from "react-icons/bi";
import { MdSignalCellularAlt } from "react-icons/md";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { dataDummyProducts } from "@/constants/dummyDb";
import { filterProduct } from "@/constants/data";

export default function Products() {
  const { theme } = useContext(ThemeContext);
  const [filterActive, setFilterActive] = useState("all");
  const handleMouseOver = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonElement = event.currentTarget;
    const arrowIcon = buttonElement.querySelector(".arrow-icon") as HTMLElement;
    if (arrowIcon) {
      arrowIcon.style.transform = "translateX(0.5rem)";
    }
  };

  const filteredProducts = useMemo(
    () =>
      dataDummyProducts.filter((product) => {
        if (filterActive === "all") {
          return product;
        } else if (filterActive === "new") {
          return product.isNew;
        } else {
          return product.isPopuler;
        }
      }),
    [filterActive]
  );

  const handleMouseOut = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonElement = event.currentTarget;
    const arrowIcon = buttonElement.querySelector(".arrow-icon") as HTMLElement;
    if (arrowIcon) {
      arrowIcon.style.transform = "translateX(0)";
    }
  };
  return (
    <SectionWrapper>
      <motion.section
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
        className="mt-8 transition-all duration-300 lg:mt-4"
        id="products"
      >
        <motion.div className="col-span-2 mt-[7rem] lg:mt-0">
          <motion.div
            variants={slideInTransition("up", "tween", 0.3, 1.5)}
            className="absolute invisible lg:visible left-[10%] top-20 mx-auto bg-gradient-to-t from-transparent to-cyan-100  bg-clip-text text-7xl font-extrabold text-transparent opacity-60 lg:left-[36vw] lg:top-0"
          >
            Our Products
          </motion.div>
          <motion.h1
            variants={slideInTransition("up", "tween", 0.5, 1.8)}
            className="absolute bottom-0 left-[14vw] top-14 mx-auto text-5xl font-extrabold text-cyan-300 lg:left-[42vw] lg:top-8 "
          >
            Our Products
          </motion.h1>
        </motion.div>

        <motion.div
          variants={slideInTransition("up", "tween", 1.5, 2.5)}
          className="lg:mt-[6rem] text-xl w-full text-black text-center flex flex-col gap-3 items-center"
        >
          <p className="text-base w-[400px] lg:w-[500px] px-10 truncate">
            Find a new phone that fits your budget, get it delivered to your and
            adjust what you need.
          </p>
          <div className="flex gap-3 font-lg font-sans">
            {filterProduct.map((product, idx) => (
              <Fragment key={idx}>
                <button
                  className={`hover:text-slate-600 ${filterActive === product.value ? "font-bold border-b-2 border-black" : "font-normal text-slate-400"}`}
                  onClick={() => setFilterActive(product.value)}
                >
                  {product.title}
                </button>
                {filterProduct.length !== idx + 1 && <p>|</p>}
              </Fragment>
            ))}
          </div>
        </motion.div>

        <motion.div className="mt-32 gap-x-40 gap-y-10 px-10 w-full flex flex-wrap lg:px-50">
          {filteredProducts.map((product) => (
            <div
              key={`product-${product.id}`}
              className="card bg-base-100 w-96 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <figure>
                <Image
                  src={product.image}
                  alt="Shoes"
                  width={500}
                  height={500}
                  className="hover:scale-105 transition-all duration-300"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-info btn-outline">Buy Now</button>
                  <button
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    className="flex p-3 items-center btn-detail"
                  >
                    View More
                    <IoIosArrowForward className="arrow-icon transition-all duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.section>
    </SectionWrapper>
  );
}
