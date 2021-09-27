import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import Sidebar from "./components/Sidebar";

export default function Home() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <Head>
        <title>Personal Portfolio | Samsudin Mohamad</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Samsudin Mohamad Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.toggle} onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <IoCloseOutline color="white" fontSize="2em" />
          ) : (
            <IoMenuOutline color="white" fontSize="2em" />
          )}
        </div>
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
              <h4>I&apos;m a Front End Web Development</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Similique, culpa? Tenetur nobis voluptate, animi fugiat velit
                quia eveniet iste maiores consequuntur commodi assumenda tempore
                iusto itaque.
              </p>
              <Link href="#about">
                <a className={styles.btn}>About Me</a>
              </Link>
            </div>
          </div>
        </section>
        <section id="about">teste</section>
        <Sidebar toggle={toggle} />
      </main>
    </div>
  );
}
