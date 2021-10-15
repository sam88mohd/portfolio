import React, { useState } from "react";
import styles from "../../../styles/Qualifications.module.css";
import { FaUserGraduate, FaBriefcase } from "react-icons/fa";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

const Qualifications = () => {
  const tabs = ["education", "workExp"];
  const [tabId, setTabId] = useState(0);
  return (
    <section id="qualifications" className={styles.qualifications}>
      <div className="title white">
        <h2>Qualifications</h2>
        <p>My personal journey</p>
      </div>
      <div>
        <div className={styles.content}>
          <div className={styles.subtitleBx}>
            <div
              className={`${styles.subtitleTab} ${
                tabId === 0 ? styles.active : ""
              }`}
              onClick={() => setTabId(0)}
            >
              <FaUserGraduate /> Education
            </div>
            <div
              className={`${styles.subtitleTab} ${
                tabId === 1 ? styles.active : ""
              }`}
              onClick={() => setTabId(1)}
            >
              <FaBriefcase /> Work
            </div>
          </div>
          <div>{tabId === 0 ? <Education /> : <WorkExperience />}</div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
