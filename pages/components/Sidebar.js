import React from "react";
import Link from "next/link";
import styles from "../../styles/Banner.module.css";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  close: { opacity: 0, x: "-100%" },
};

const Sidebar = ({ toggle }) => {
  return (
    <motion.div
      className={styles.sidebar}
      animate={toggle ? "open" : "close"}
      variants={variants}
    >
      <ul>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link href="#home">
            <a>Home</a>
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link href="#about">
            <a>About</a>
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link href="#skills">
            <a>Skills</a>
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link href="#qualifications">
            <a>Qualifications</a>
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link href="#work">
            <a>Work</a>
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link href="#contact">
            <a>Contact</a>
          </Link>
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default Sidebar;
