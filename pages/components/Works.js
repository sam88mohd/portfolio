import React from "react";
import styles from "../../styles/Work.module.css";
import Image from "next/image";

const Works = () => {
  return (
    <section id="work" className={styles.work}>
      <div className="title">
        <h2>Recent Work</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          similique, consequuntur, quis tempore vel repudiandae ullam expedita,
          officia illum praesentium magni sed?
        </p>
      </div>
      <div className={styles.content}>
        <div className={styles.workBox}>
          <div className={styles.imgBx}>
            <Image src="/work/img1.jpg" alt="img1" width={400} height={400} />
          </div>
          <div className={styles.textBx}>
            <h3>Project 01</h3>
          </div>
        </div>
        <div className={styles.workBox}>
          <div className={styles.imgBx}>
            <Image src="/work/img2.jpg" alt="img1" width={400} height={400} />
          </div>
          <div className={styles.textBx}>
            <h3>Project 02</h3>
          </div>
        </div>
        <div className={styles.workBox}>
          <div className={styles.imgBx}>
            <Image src="/work/img3.jpg" alt="img1" width={400} height={400} />
          </div>
          <div className={styles.textBx}>
            <h3>Project 03</h3>
          </div>
        </div>
        <div className={styles.workBox}>
          <div className={styles.imgBx}>
            <Image src="/work/img4.jpg" alt="img1" width={400} height={400} />
          </div>
          <div className={styles.textBx}>
            <h3>Project 04</h3>
          </div>
        </div>
        <div className={styles.workBox}>
          <div className={styles.imgBx}>
            <Image src="/work/img5.jpg" alt="img1" width={400} height={400} />
          </div>
          <div className={styles.textBx}>
            <h3>Project 05</h3>
          </div>
        </div>
        <div className={styles.workBox}>
          <div className={styles.imgBx}>
            <Image src="/work/img6.jpg" alt="img1" width={400} height={400} />
          </div>
          <div className={styles.textBx}>
            <h3>Project 06</h3>
          </div>
        </div>
        <div className={styles.workBox}>
          <div className={styles.imgBx}>
            <Image src="/work/img7.jpg" alt="img1" width={400} height={400} />
          </div>
          <div className={styles.textBx}>
            <h3>Project 07</h3>
          </div>
        </div>
        <div className={styles.workBox}>
          <div className={styles.imgBx}>
            <Image src="/work/img8.jpg" alt="img1" width={400} height={400} />
          </div>
          <div className={styles.textBx}>
            <h3>Project 08</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
