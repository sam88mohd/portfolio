import React from "react";
import styles from "../../styles/Work.module.css";
import Image from "next/image";

const Works = () => {
  return (
    <section id="work" className={styles.work}>
      <div className="title">
        <h2>Recent Work</h2>
        <p>My previous project</p>
      </div>
      <div className={styles.content}>
        <div className={styles.workBox}>
          <div className={styles.imgBx}>
            <Image src="/work/img1.jpg" alt="img1" width={600} height={400} />
          </div>
          <div className={styles.textBx}>
            <h3>CV Creator</h3>
          </div>
        </div>
        <div className={styles.workBox}>
          <div className={styles.imgBx}>
            <Image src="/work/img2.jpg" alt="img1" width={600} height={400} />
          </div>
          <div className={styles.textBx}>
            <h3>Huddle Landing Page</h3>
          </div>
        </div>
        <div className={styles.workBox}>
          <div className={styles.imgBx}>
            <Image src="/work/img3.jpg" alt="img1" width={600} height={400} />
          </div>
          <div className={styles.textBx}>
            <h3>Base Apparel Coming Soon</h3>
          </div>
        </div>
        <div className={styles.workBox}>
          <div className={styles.imgBx}>
            <Image src="/work/img4.jpg" alt="img1" width={600} height={400} />
          </div>
          <div className={styles.textBx}>
            <h3>Four Card Feature</h3>
          </div>
        </div>
        <div className={styles.workBox}>
          <div className={styles.imgBx}>
            <Image src="/work/img5.jpg" alt="img1" width={600} height={400} />
          </div>
          <div className={styles.textBx}>
            <h3>Futurama Wiki Page</h3>
          </div>
        </div>
        <div className={styles.workBox}>
          <div className={styles.imgBx}>
            <Image src="/work/img6.jpg" alt="img1" width={600} height={400} />
          </div>
          <div className={styles.textBx}>
            <h3>Travel Blog</h3>
          </div>
        </div>
        <div className={styles.workBox}>
          <div className={styles.imgBx}>
            <Image src="/work/img7.jpg" alt="img1" width={600} height={400} />
          </div>
          <div className={styles.textBx}>
            <h3>Conference Schedule Site</h3>
          </div>
        </div>
        <div className={styles.workBox}>
          <div className={styles.imgBx}>
            <Image src="/work/img8.jpg" alt="img1" width={600} height={400} />
          </div>
          <div className={styles.textBx}>
            <h3>QS-ISKB Daily Response</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
