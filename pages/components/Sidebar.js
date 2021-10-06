import React from "react";
import Link from "next/link";
import styles from "../../styles/Banner.module.css";
import { motion } from "framer-motion";

const Sidebar = ({ toggle }) => {
  return (
    <div className={`${styles.sidebar} ${toggle ? styles.active : ""}`}>
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
    </div>
  );
};

export default Sidebar;
