import React from "react";
import styles from "../../styles/Home.module.css";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

const ToggleBtn = ({ toggle, setToggle, hideRef }) => {
  return (
    <div
      className={styles.toggle}
      ref={hideRef}
      onClick={() => setToggle(!toggle)}
    >
      {toggle ? (
        <IoCloseOutline color="white" fontSize="2em" />
      ) : (
        <IoMenuOutline color="white" fontSize="2em" />
      )}
    </div>
  );
};

export default ToggleBtn;
