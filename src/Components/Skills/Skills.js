import React from "react";
import styles from "./Skills.module.css";
import manDesk from "../../Assets/personOnDesk.png";
import SkillList from "./SkillList/SkillList";
import { AiFillHtml5 } from "react-icons/ai";
import {
  SiJavascript,
  SiMaterialui,
  SiStrapi,
  SiCplusplus,
  SiPostman,
  SiRedux,
} from "react-icons/si";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import { DiGit } from "react-icons/di";
import { IoLogoNodejs } from "react-icons/io";
import { ImNpm } from "react-icons/im";

let skills = [
  { name: "html", icon: <AiFillHtml5 /> },
  { name: "css", icon: <FaCss3Alt /> },
  { name: "javascript", icon: <SiJavascript /> },
  { name: "ReactJS", icon: <FaReact /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "bootstrap", icon: <BsBootstrapFill /> },
  { name: "figma", icon: <FiFigma /> },
  { name: "materialUI", icon: <SiMaterialui /> },
  { name: "NPM", icon: <ImNpm /> },
  { name: "Git", icon: <DiGit /> },
  { name: "Node", icon: <IoLogoNodejs /> },
  { name: "Strapi", icon: <SiStrapi /> },
  { name: "C-plus-plus-lang", icon: <SiCplusplus /> },
  { name: "Postman", icon: <SiPostman /> },
];

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
            <div className={styles.listwrapper}>
              <SkillList skills={skills} />
            </div>
          </div>
          <ul className={styles.descriptionlist}>
            <li className={styles.descriptionitem}>
              <h3 className={styles.descriptiontitle}>
                Develop highly interactive Front End / User Interfaces for web
                and mobile apps.
              </h3>
            </li>
            <li className={styles.descriptionitem}>
              <h3 className={styles.descriptiontitle}>
                Create highly responsive apps built using ReactJS{" "}
              </h3>
            </li>
            <li className={styles.descriptionitem}>
              <h3 className={styles.descriptiontitle}>
                Maintain exsiting site and add new user functionality
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
