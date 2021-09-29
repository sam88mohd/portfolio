import React from "react";
import styles from "../../styles/Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className="title white">
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi nihil
          iste nemo eum iure, nulla similique? Quo saepe aspernatur, quibusdam
          quas possimus sit recusandae voluptatibus perferendis rerum, adipisci
          itaque incidunt!
        </p>
      </div>
      <div className={styles.contactForm}>
        <div className={styles.row}>
          <div className={styles.col50}>
            <input type="text" placeholder="First Name" />
          </div>
          <div className={styles.col50}>
            <input type="text" placeholder="Last Name" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col50}>
            <input type="text" placeholder="Email" />
          </div>
          <div className={styles.col50}>
            <input type="text" placeholder="Mobile No." />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col100}>
            <textarea placeholder="Message" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col100}>
            <input type="submit" value="Send" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
