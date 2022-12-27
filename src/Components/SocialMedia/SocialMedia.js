import React from "react";
import styles from "./SocialMedia.module.css";
import {AiFillGithub} from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs"
import {SiGmail } from "react-icons/si";
function SocialMedia() {
  return (
    <ul className={styles.wrapper}>
      <li className={styles["social-item"]}>
        <a
          href="https://www.linkedin.com/in/moises-lopez-b20b33187/"
          className={styles["social-link"]}
        >
          <BsLinkedin className={styles.linkedin} />
        </a>
      </li>
      <li className={styles["social-item"]}>
        <a
          href="https://github.com/moises-devs"
          className={styles["social-link"]}
        >
          <AiFillGithub className={styles.github}  />
        </a>
      </li>
      <li className={styles["social-item"]}>
        <a
          href="mailto:Mozlopez@ucdavis.edu?subject=EmploymentOpportunity&body=Hi, Moises let's connect"
          className={styles["social-link"]}
        >
          <SiGmail className={styles.gmail}  />
        </a>
      </li>
    </ul>
  );
}

export default SocialMedia;
