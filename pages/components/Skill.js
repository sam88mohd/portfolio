import React from "react";
import styles from "../../styles/Skills.module.css";
import { BsCode } from "react-icons/bs";
import { MdExpandMore } from "react-icons/md";
import { BiHide } from "react-icons/bi";
import ProgressBar from "@ramonak/react-progress-bar";
import { useDetectOutsideClick } from "../../functions/useDetectOutsideClick";
import { motion } from "framer-motion";

const Skill = ({ title, skills, elRef }) => {
  const [toggle, setToggle] = useDetectOutsideClick(elRef, false);
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div className={styles.skillsBx} ref={elRef}>
      <div className={styles.skillsHeader} onClick={() => setToggle(!toggle)}>
        <div className={styles.headerTitle}>
          <BsCode fontSize={50} />
          <h2>{title}</h2>
        </div>
        <div className={styles.logoMore}>
          {toggle ? <BiHide fontSize={25} /> : <MdExpandMore fontSize={25} />}
        </div>
      </div>
      <motion.div initial="hidden" animate="visible" variants={list}>
        {toggle &&
          skills.map((skill, i) => (
            <motion.div key={i} className={styles.skillBx} variants={item}>
              <div className={styles.skillHeader}>
                <h3>{skill.name}</h3>
                <p>{skill.percent}%</p>
              </div>
              <ProgressBar
                completed={skill.percent}
                bgColor="#00bcd4"
                baseBgColor="#b9e2e7"
                height={10}
                isLabelVisible={false}
              />
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
};

export default Skill;
