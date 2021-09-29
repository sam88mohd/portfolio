import React from "react";
import styles from "../../styles/Services.module.css";
import { DiReact } from "react-icons/di";
import { FaPuzzlePiece } from "react-icons/fa";

const Services = () => {
  return (
    <section className={styles.services} id="services">
      <div className="title">
        <h2>Our Services</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
          dolores corporis aspernatur incidunt dolorum temporibus, quod
          cupiditate quidem nemo dignissimos accusamus, optio sunt voluptates
          eligendi. Sint accusantium voluptatibus quisquam consequatur!
        </p>
      </div>
      <div className={styles.content}>
        <div className={styles.servicesBx}>
          <FaPuzzlePiece fontSize={"110px"} className={styles.iconStyles} />
          <h2>Web Design</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            est magni itaque animi, velit porro eum, quasi recusandae, libero
            minima
          </p>
        </div>
        <div className={styles.servicesBx}>
          <DiReact fontSize={"110px"} className={styles.iconStyles} />
          <h2>Web Development</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            est magni itaque animi, velit porro eum, quasi recusandae, libero
            minima
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
