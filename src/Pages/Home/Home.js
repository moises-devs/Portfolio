import React from "react";
import Greeting from "../../Components/Greeting/Greeting.js";
import Skills from "../../Components/Skills/Skills.js";
import styles from "./Home.module.css";
import { motion } from "framer-motion";
function Home() {
  return (
    <motion.section className={styles.wrapper}
    initial={{y:'-100%', opacity:0,}}
    transition={{duration:0.45, ease:'easeIn'}}
    animate={{y:0, opacity:1}}>
      <Greeting />
      <Skills />
    </motion.section>
  );
}

export default Home;
