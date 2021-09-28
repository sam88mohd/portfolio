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
          <Link href="">
            <a>Services</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>Work</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
