import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          HARSH MALI
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/harsh-mali-5b3385224/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/cutieandroid">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.youtube.com/@harshbugs.">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="https://www.instagram.com/harshbugs/">
            <img src="/instagram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
