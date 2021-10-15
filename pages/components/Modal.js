import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "../../styles/modal.module.css";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";

const Modal = ({ show, onClose, children }) => {
  const [iSBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <button onClick={handleCloseClick}>Close</button>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  ) : null;

  if (iSBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
