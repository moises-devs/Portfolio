import React from "react";
import Greeting from "../../Components/Greeting/Greeting.js";
import Skills from "../../Components/Skills/Skills.js";
import styles from "./Home.module.css"
function Home() {
  return (
    <section className={styles.wrapper}>
      <Greeting /> 
      <Skills />
    </section>
  );
}

export default Home;
