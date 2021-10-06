import React from "react";
import styles from "../../styles/About.module.css";
import Image from "next/image";
const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className="title white">
        <h2>About Me</h2>
        <p>My introduction</p>
      </div>
      <div className={styles.content}>
        <div className={styles.textBx}>
          <p>
            Graduated from Computer Engineering Course but have a passion about
            web development.
          </p>
          <p>
            I have been working almost 9 years in multiple field but still not
            giving up my dreams to be a web developer.
          </p>
          <p>
            On a personal level, I am highly-motivated, result oriented,
            self-driven, hard-working, fast learner and constantly seeking to
            improve my skills and am fully aware of the latest Front-end
            Development Tools.
          </p>
          <p>Below is a list of my current technical skills:</p>
          <div className={styles.logoContainer}>
            <div className={styles.logoBx}>
              <Image src={"/logo/css3.png"} alt="css3" width={50} height={50} />
            </div>
            <div className={styles.logoBx}>
              <Image
                src={"/logo/html5.png"}
                alt="css3"
                width={50}
                height={50}
              />
            </div>
            <div className={styles.logoBx}>
              <Image src={"/logo/js.png"} alt="css3" width={50} height={50} />
            </div>
            <div className={styles.logoBx}>
              <Image
                src={"/logo/react.png"}
                alt="css3"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
        <div className={styles.imgBx}>
          <Image src={"/foto.jpg"} width={500} height={400} alt="bg1" />
        </div>
      </div>
    </section>
  );
};

export default About;
