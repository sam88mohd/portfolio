import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
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
          <h4>I&apos;m a Front End Web Developer.</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique,
            culpa? Tenetur nobis voluptate, animi fugiat velit quia eveniet iste
            maiores consequuntur commodi assumenda tempore iusto itaque.
          </p>
          <Link href="#about">
            <a className={styles.btn}>About Me</a>
          </Link>
        </div>
        <ul className={styles.sci}>
          <li>
            <Link href="#">
              <a>
                <FaFacebookF fontSize="1.8em" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                <FaGithub fontSize="1.8em" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                <FaLinkedinIn fontSize="1.8em" />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Banner;
