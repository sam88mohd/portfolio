import React from "react";
import styles from "../../../styles/Qualifications.module.css";
import { FaRegCalendarAlt } from "react-icons/fa";

const WorkExperience = () => {
  return (
    <div className={styles.tabContent}>
      {/* content 1 */}
      <div className={styles.tabChild}>
        <div className={styles.tabHead}>
          <h3>IT Officer</h3>
          <p>ibis styles Kota Bharu</p>
          <div className={styles.calendar}>
            <FaRegCalendarAlt /> 2020 - Current
          </div>
        </div>
      </div>
      <div>
        <span className={styles.rounder}></span>
        <span className={styles.line}></span>
      </div>
      <div></div>
      <div></div>
      <div>
        <span className={styles.rounder}></span>
        <span className={styles.line}></span>
      </div>
      {/* content 2 */}
      <div className={`${styles.tabChildRight}`}>
        <div className={styles.tabHead}>
          <h3>Field Service Engineer</h3>
          <p>Diebold Nixdorf (M) Sdn. Bhd.</p>
          <div className={styles.calendar}>
            <FaRegCalendarAlt /> 2015 - 2019
          </div>
        </div>
      </div>
      {/* content 3 */}
      <div className={styles.tabChild}>
        <div className={styles.tabHead}>
          <h3>Field Service Engineer</h3>
          <p>Micro Inn Technology</p>
          <div className={styles.calendar}>
            <FaRegCalendarAlt /> 2013 - 2015
          </div>
        </div>
      </div>
      <div>
        <span className={styles.rounder}></span>
        <span className={styles.line}></span>
      </div>
      <div></div>
      <div></div>
      <div>
        <span className={styles.rounder}></span>
      </div>
      {/* content 4 */}
      <div className={styles.tabChildRight}>
        <div className={styles.tabHead}>
          <h3>Assistant Service Engineer</h3>
          <p>Tele Dynamics Sdn. Bhd</p>
          <div className={styles.calendar}>
            <FaRegCalendarAlt /> 2012 - 2013
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
