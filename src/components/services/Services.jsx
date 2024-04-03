import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 1,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"darkgray"}}>Transforming</motion.b> Your Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"darkgray"}}>Into Reality</motion.b>
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
            className="box"
            whileHover={{background: "lightgray", color: "black"}}
        >
          <h2>Mobile Applications</h2>
          <img src={"/appdev.jpg"}/>
          <p>
            Crafting innovative mobile solutions tailored to your needs. From iOS to Android, I bring your app ideas to
            life, ensuring seamless user experiences across platforms.
          </p>
        </motion.div>
        <motion.div
            className="box"
            whileHover={{background: "lightgray", color: "black"}}
        >
          <h2>Dyanamic Websites</h2>
          <img src={"/webdev.jpg"}/>
          <p>
            Empower your online presence with dynamic websites that adapt to your business goals. My fullstack expertise
            ensures robust functionality, intuitive design, and effortless scalability
          </p>
        </motion.div>
        <motion.div
            className="box"
            whileHover={{background: "lightgray", color: "black"}}
        >
          <h2>Data Analysis</h2>
          <img src={"/dataanalysis.jpg"}/>
          <p>
            Unlock the power of your data with advanced analytics. From insightful visualization to predictive modeling,
            I help you derive actionable insights to drive informed decisions.
          </p>

        </motion.div>
        <motion.div
            className="box"
            whileHover={{background: "lightgray", color: "black"}}
        >
          <h2>Machine Learning Solutions</h2>
          <img src={"/ml.jpg"}/>
          <p>
            Leverage the latest in machine learning technology to drive innovation and efficiency in your business. From
            predictive algorithms to intelligent automation, I empower your journey towards AI-driven success.
          </p>

        </motion.div>

        <motion.div
            className="box"
            whileHover={{background: "lightgray", color: "black"}}
        >
          <h2>Instructor</h2>
          <img src={"/instructor.jpg"}/>
          <p>
            Let me guide you through the intricacies of modern technology. As your dedicated instructor, I will  equip you
            with the skills and knowledge needed to develop the services I provide. From mobile app development to
            fullstack websites, data analysis, and machine learning, I will empower you to master these technologies and
            unleash your full potential
          </p>

        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
