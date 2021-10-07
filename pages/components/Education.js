import React from "react";
import styles from "../../styles/Qualifications.module.css";
import { FaRegCalendarAlt } from "react-icons/fa";

const Education = () => {
  return (
    <div className={styles.tabContent}>
      {/* content 1 */}
      <div>
        <div className={styles.tabHead}>
          <h3>Bachelor Degree in Computer Engineering</h3>
          <p>Universiti Malaysia Perlis</p>
          <div className={styles.calendar}>
            <FaRegCalendarAlt /> 2007 - 2012
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
      <div>
        <div className={styles.tabHead}>
          <h3>Science Physics Matriculation Certificate</h3>
          <p>Kedah Matriculation College</p>
          <div className={styles.calendar}>
            <FaRegCalendarAlt /> 2006 - 2007
          </div>
        </div>
      </div>
      {/* content 3 */}
      <div>
        <div className={styles.tabHead}>
          <h3>Sijil Pelajaran Malaysia (SPM)</h3>
          <p>Sekolah Menengah Teknik Bachok</p>
          <div className={styles.calendar}>
            <FaRegCalendarAlt /> 2003 - 2005
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
      <div>
        <div className={styles.tabHead}>
          <h3>Penilaian Menengah Rendah (PMR)</h3>
          <p>Sekolah Menengah Kebangsaan Melor</p>
          <div className={styles.calendar}>
            <FaRegCalendarAlt /> 2001 - 2003
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
