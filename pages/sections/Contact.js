import React, { useState } from "react";
import styles from "../../styles/Contact.module.css";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (
      firstName &&
      lastName &&
      isValidEmail(email) &&
      phoneNumber &&
      message
    ) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
      setEmailSent(true);
      setTimeout(() => {
        setEmailSent(false);
      }, 3000);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="title white">
        <h2>Contact Me</h2>
        <p>Get in Touch</p>
      </div>
      <div className={styles.infoBx}>
        <ul>
          <li>
            <span>Phone Number:</span> +60187715027
          </li>
          <li>
            <span>Email:</span> sam88mohd@gmail.com
          </li>
        </ul>
      </div>
      <div className={styles.contactForm}>
        <div className={styles.row}>
          <div className={styles.col50}>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className={styles.col50}>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col50}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.col50}>
            <input
              type="text"
              placeholder="Mobile No."
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col100}>
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col100}>
            <input type="submit" value="Send" onClick={() => submit()} />
          </div>
        </div>
        <span className={emailSent ? styles.visible : styles.hidden}>
          Thank you for your message, we will be in touch in no time!
        </span>
      </div>
    </section>
  );
};

export default Contact;
