import React from "react";
import styles from "./Greeting.module.css";
import SocialMedia from "../SocialMedia/SocialMedia";
import person from "../../Assets/young_man_sitting_with_a_laptop_and_waving_her_hand.png";
function Greeting() {
  return (
    <section className={styles.greeting}>
      <div className={styles.greetwrapper}>
        <h1> Hello 👋.</h1>
        <h2>
          I'm <span> Moises Lopez </span>
          Front-End Developer, Always Learning
        </h2>
        <SocialMedia />
        <a href="https://www.linkedin.com/in/moises-lopez-b20b33187/" target="_blank" rel="noreferrer"
        className={styles.contactBtn}> Contact me </a>
      </div>
      <div className={styles.imgwrapper}>
        <img src={person} alt="person waving"/>
      </div>
    </section>
  );
}

export default Greeting;
