import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #e7ebed, #cdccdc)"
            : "linear-gradient(180deg, #e1e4e8, #939ca3)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "Reach me out for" : "My Works"}
      </motion.h1>

    </div>
  );
};

export default Parallax;
