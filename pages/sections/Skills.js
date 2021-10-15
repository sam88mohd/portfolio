import React, { useRef } from "react";
import { designList, feList } from "../../functions/constant";
import styles from "../../styles/Skills.module.css";
import Skill from "./Skill";

const Skills = () => {
  const feRef = useRef(null);
  const deRef = useRef(null);

  return (
    <section className={styles.skills} id="skills">
      <div className="title">
        <h2>Skills</h2>
        <p>My technical level</p>
      </div>
      <div className={styles.content}>
        <Skill title="Front End Development" skills={feList} elRef={feRef} />
        <Skill title="Design" skills={designList} elRef={deRef} />
      </div>
    </section>
  );
};

export default Skills;
