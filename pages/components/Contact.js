import React from "react";
import styles from "../../styles/Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className="title white">
        <h2>Contact Me</h2>
        <p>Get in Touch</p>
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
