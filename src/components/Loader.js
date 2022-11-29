import React from "react";
import { motion } from "framer-motion";
import "../styles/Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 0, opacity: 0 }}
        transition={{
          duration: 0.7,
        }}
      ></motion.div>
    </div>
  );
};

export default Loader;
