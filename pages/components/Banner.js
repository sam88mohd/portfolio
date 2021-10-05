import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import styles from "../../styles/Banner.module.css";

const Banner = () => {
  return (
    <section className={styles.banner} id="home">
      <div className={styles.imgSidebar}>
        <Image src={"/sidebarimg.jpg"} layout="fill" alt="sidebarImg" />
      </div>
      <div className={styles.contextBx}>
        <h5 className={styles.logoText}>My_Portfolio</h5>
        <div>
          <h4>
            <span>Hello</span>, I&apos;m
          </h4>
          <h2>Samsudin Mohamad</h2>
          <h4>I&apos;m a Junior Front End Web Developer.</h4>
          <p>
            Passionate about web development and self taught front end web
            developer.
          </p>
          <Link href="#about">
            <a className={styles.btn}>About Me</a>
          </Link>
        </div>
        <ul className={styles.sci}>
          <li>
            <Link href="https://github.com/sam88mohd">
              <a target="_blank">
                <FaGithub fontSize="1.8em" color={"black"} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/samsudin-mohamad-b7a88b1a1/">
              <a target="_blank">
                <FaLinkedinIn fontSize="1.8em" color={"black"} />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Banner;
