import React from "react";
import Greeting from "../../Components/Greeting/Greeting.js";
import Skills from "../../Components/Skills/Skills.js";
import Footer from "../../Components/Footer/Footer.js";
import styles from "./Home.module.css"
function Home() {
  return (
    <section className={styles.wrapper}>
      <Greeting /> 
      <Skills />
      <Footer />
    </section>
  );
}

export default Home;
