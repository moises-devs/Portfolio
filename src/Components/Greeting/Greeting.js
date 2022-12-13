import React from "react";
import styles from "./Greeting.module.css";
import SocialMedia from "../SocialMedia/SocialMedia";
import person from "../../Assets/3d-casual-life-young-man-sitting-with-a-laptop-and-waving-his-hand.png";
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
        <button className={styles.contactBtn}> Contact me </button>
      </div>
      <div className={styles.imgwrapper}>
        <img src={person} alt="person waving"/>
      </div>
    </section>
  );
}

export default Greeting;
