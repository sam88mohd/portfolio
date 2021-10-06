import React from "react";
import styles from "../../styles/Home.module.css";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const ToggleBtn = ({ toggle, setToggle, hideRef }) => {
  return (
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      className={styles.toggle}
      ref={hideRef}
      onClick={() => setToggle(!toggle)}
    >
      {toggle ? (
        <IoCloseOutline color="white" fontSize="2em" />
      ) : (
        <IoMenuOutline color="white" fontSize="2em" />
      )}
    </motion.div>
  );
};

export default ToggleBtn;
