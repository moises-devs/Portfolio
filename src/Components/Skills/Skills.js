import React from "react";
import styles from "./Skills.module.css";
import manDesk from "../../Assets/casual-life-3d-side-view-of-man-sitting-in-front-of-laptop-and-talking-on-phone.png";
import SkillList from "./SkillList/SkillList"
function Skills() {
  return (
    <section className={styles.wrapper}>
      <h1> Here's What I do</h1>
      <div className={styles.content}>
        <div className={styles.imgwrapper}>
          <img src={manDesk} alt="man on desk" />
        </div>
        <div className={styles.contentdetails}>
          <div className={styles.skillwrapper}>
          <h2> Front End Development </h2>
          <SkillList/>
          </div>
        <ul className={styles.descriptionlist}>
          <li className={styles.descriptionitem}>
            <h3 className={styles.descriptiontitle}>

              Develop highly interactive Front End / User Interfaces for web and
              mobile apps.
            </h3>
          </li>
          <li className={styles.descriptionitem}>
            <h3 className={styles.descriptiontitle}>Create highly responsive apps built using ReactJS </h3>
          </li>
          <li className={styles.descriptionitem}>
            <h3 className={styles.descriptiontitle}>Maintain exsiting site and add new user functionality</h3>
          </li>
        </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
