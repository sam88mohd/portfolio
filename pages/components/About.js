import React from "react";
import styles from "../../styles/About.module.css";
import Image from "next/image";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={`${styles.title} ${styles.white}`}>
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
      <div className={styles.content}>
        <div className={styles.textBx}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            accusantium facere quas est. Nihil quo rerum ducimus eos
            exercitationem vero deserunt et praesentium! Asperiores voluptate
            laudantium officia hic itaque amet. Dolores perferendis mollitia
            atque maxime dignissimos porro quo cum. Facilis sapiente recusandae
            et impedit delectus necessitatibus fugit veritatis iste officia,
            voluptates quaerat perspiciatis dolore obcaecati ducimus adipisci
            nihil laboriosam modi eius in qui cupiditate similique perferendis
            nesciunt corrupti. Sit cupiditate et iure aspernatur quia
            necessitatibus praesentium illo, numquam, facere doloribus a. Ipsum
            incidunt labore autem mollitia rerum recusandae tempora reiciendis
            nostrum quos dicta, expedita iure totam dolorum voluptas excepturi
            corrupti!
          </p>
        </div>
        <div className={styles.imgBx}>
          <Image src={"/bg1.jpg"} width={500} height={360} alt="bg1" />
        </div>
      </div>
    </section>
  );
};

export default About;
