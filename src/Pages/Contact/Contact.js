import React from 'react'
import styles from "./Contact.module.css";
import man from "../../Assets/Boy White T-Shirt-2.png";
import SocialMedia from '../../Components/SocialMedia/SocialMedia';
import { motion } from 'framer-motion';
function Contact() {
  return (
    <motion.div className={styles.wrapper}
    initial={{x:window.innerWidth}}
    animate={{x:0}}
    transition={{duration:0.45, ease:'easeIn'}}>
      <div className={styles.imgwrapper}>
        <img src={man} alt="moises waving hand"/>
      </div>
      <div className={styles.contentwrapper}>
        <h1 className={styles.title}> Contact me </h1>
        <p className={styles.bio}> You can contact me at the places mention below.</p>
        <SocialMedia/>
        <button className={styles.contactbtn}>Checkout my resume</button>
      </div>
    </motion.div>
  )
}

export default Contact