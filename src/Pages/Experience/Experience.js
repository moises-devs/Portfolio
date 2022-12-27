import React from "react";
import styles from "./Experience.module.css";
import manOnDesk from "../../Assets/casual-life-3d-young-man-in-headset-using-computer.png";
import ExperienceList from "./ExperienceList/ExperienceList";
import { motion } from "framer-motion";
function Experience() {
  return (
    <motion.section className={styles.wrapper}
    initial={{x:window.innerWidth}}
    animate={{x:0}}
    transition={{duration:0.45, ease:'easeIn'}}
    >
      <div className={styles.headingwrapper}>
        <div className={styles.imgwrapper}>
          <img src={manOnDesk} alt="Man working with laptop on desk." />
        </div>
        <div className={styles.heading}>
          <h1 className={styles.title}>
            Experience
          </h1>
          <h2 className={styles.subtitle}> Work, Internships, Volunteering </h2>
          <p className={styles.details}>
            I have experience working with interfaces and developement in small
            companies helping them grow and meet their respective goals. From
            working in UI/UX to integrating a fully working management system /
            data system I have helped businesses find productity and incoporate
            more trust in technology.
          </p>
        </div>
      </div>
      <ExperienceList/>
    </motion.section>
  );
}

export default Experience;
