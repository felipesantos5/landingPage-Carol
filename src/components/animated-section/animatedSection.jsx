import React from "react";
import { motion } from "framer-motion";

const AnimatedSection = ({ children, className }) => {
  return (
    <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true, amount: 0.4 }} className={className}>
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
