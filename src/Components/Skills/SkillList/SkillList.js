import { AiFillHtml5 } from "react-icons/ai";
import {
  SiJavascript,
  SiMaterialui,
  SiStrapi,
  SiCplusplus,
  SiPostman,
} from "react-icons/si";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import { DiGit } from "react-icons/di";
import { IoLogoNodejs } from "react-icons/io";
import { ImNpm } from "react-icons/im";
import styles from "./SkillList.module.css";
import SkillItem from "../SkillItem/SkillItem";

let skills = [
  { name: "html", icon: <AiFillHtml5 /> },
  { name: "css", icon: <FaCss3Alt /> },
  { name: "javascript", icon: <SiJavascript /> },
  { name: "ReactJS", icon: <FaReact /> },
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

function SkillList() {
  return (
    <ul className={styles.listwrapper}>
      {skills.map((skill, index) => (
        <SkillItem key={`${index}${skill.name}`}name={skill.name} render={skill.icon} />
      ))}
    </ul>
  );
}

export default SkillList;
