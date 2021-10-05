import React from "react";
import Link from "next/link";
import styles from "../../styles/Banner.module.css";

const Sidebar = ({ toggle }) => {
  return (
    <div className={`${styles.sidebar} ${toggle ? styles.active : ""}`}>
      <ul>
        <li>
          <Link href="#home">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="#skills">
            <a>Skills</a>
          </Link>
        </li>
        <li>
          <Link href="#qualifications">
            <a>Qualifications</a>
          </Link>
        </li>
        <li>
          <Link href="#work">
            <a>Work</a>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
